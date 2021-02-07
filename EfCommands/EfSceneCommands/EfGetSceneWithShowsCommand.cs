using Application.Commands.SceneCommands;
using Application.DTO.SceneDto;
using Application.DTO.SectorDto;
using Application.DTO.ShowDto;
using Application.Exceptions;
using Application.Interfaces;
using Application.Queries;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfSceneCommands
{
    public class EfGetSceneWithShowsCommand : EfBaseCommand, IGetSceneWithShowsCommand
    {
        public EfGetSceneWithShowsCommand(EfContext context) : base(context)
        {
        }

        public int Id => 50;

        public string Name => "Get Scenes with Shows Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin, Role.Theatre, Role.User };

        public GetSceneWithShowsDto Execute(int request)
        {
            var scene = Context.Scenes
                .Include(s => s.Sectors)
                .Include(t => t.Theatre)
                .Include(t => t.Shows)
                .ThenInclude(t => t.Category)
                .Where(s => s.Id == request)
                .FirstOrDefault();

            if (scene == null)
                throw new EntityNotFoundException(request.ToString());

            return new GetSceneWithShowsDto
            {
                Id = scene.Id,
                TheatreName = scene.Theatre.TheatreName,
                TheatreId = scene.TheatreId,
                SceneName = scene.SceneName,
                GetSectorDtos = scene.Sectors.Select(ss => new GetSectorDto
                {
                    Id = ss.Id,
                    SectorName = ss.SectorName,
                    RowsTotalNumber = ss.RowsTotalNumber,
                    SeatCapacity = ss.SeatCapacity
                }),
                ShowBaseInfoDtos = scene.Shows.Select(sh => new ShowBaseInfoDto
                {
                    Id = sh.Id,
                    Title = sh.Title,
                    CategoryName = sh.Category.CategoryName
                })
            };
        }
    }
}
