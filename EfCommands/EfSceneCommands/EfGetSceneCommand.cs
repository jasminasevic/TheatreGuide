using Application.Commands.SceneCommands;
using Application.DTO.SceneDto;
using Application.DTO.SectorDto;
using Application.Exceptions;
using Application.Interfaces;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfSceneCommands
{
    public class EfGetSceneCommand : EfBaseCommand, IGetSceneCommand
    {
        public EfGetSceneCommand(EfContext context) : base(context)
        {
        }

        public int Id => 46;

        public string Name => "Get Scene Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin, Role.Theatre, Role.User };

        public GetSceneDto Execute(int request)
        {
            var scene = Context.Scenes
                .Include(s => s.Sectors)
                .Include(t => t.Theatre)
                .Where(s => s.Id == request)
                .FirstOrDefault();

            if (scene == null)
                throw new EntityNotFoundException(request.ToString());

            return new GetSceneDto
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
                })
            };
        }
    }
}
