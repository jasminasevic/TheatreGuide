using Application.Commands.SceneCommands;
using Application.DTO.SceneDto;
using Application.DTO.SubsceneDto;
using Application.Exceptions;
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

        public GetSceneDto Execute(int request)
        {
            var scene = Context.Scenes
                .Include(s => s.Subscenes)
                .ThenInclude(sc => sc.SubsceneCategory)
                .Include(t => t.Theatre)
                .Where(s => s.Id == request)
                .FirstOrDefault();

            if (scene == null)
                throw new EntityNotFoundException(request.ToString());

            return new GetSceneDto
            {
                Id = scene.Id,
                TheatreName = scene.Theatre.TheatreName,
                SceneName = scene.SceneName,
                GetSubsceneDtos = scene.Subscenes.Select(ss => new GetSubsceneDto
                {
                    Id = ss.Id,
                    SubsceneCategoryName = ss.SubsceneCategory.SubsceneCategoryName,
                    RowsTotalNumber = ss.RowsTotalNumber,
                    SeatCapacity = ss.SeatCapacity
                })
            };
        }
    }
}
