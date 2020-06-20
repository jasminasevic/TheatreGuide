using Application.Commands.SceneCommands;
using Application.DTO.SceneDto;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfSceneCommands
{
    public class EfEditSceneCommand : EfBaseCommand, IEditSceneCommand
    {
        public EfEditSceneCommand(EfContext context) : base(context)
        {
        }

        public void Execute(SceneDto request)
        {
            var scene = Context.Scenes.Find(request.Id);

            if (scene == null)
                throw new EntityNotFoundException(request.Id.ToString());

            if (request.SceneName.ToLower() != scene.SceneName
                && request.TheatreId != scene.TheatreId)
            {
                if (Context.Scenes.Any(s => s.SceneName.ToLower() == request.SceneName.ToLower()
                     && s.Theatre.TheatreName.ToLower() == request.SceneName.ToLower()))
                    throw new EntityAlreadyExistsException(request.SceneName);
            }

            scene.SceneName = request.SceneName;
            scene.TheatreId = request.TheatreId;
            scene.ModifiedAt = DateTime.Now;

            foreach (var subscene in Context.Subscenes.Where(s => s.SceneId == request.Id))
            {
                Context.Subscenes.Remove(subscene);
            }

            foreach(var subscene in request.SubsceneDtos)
            {
                Context.Subscenes.Add(new Domain.Subscene
                {
                    ModifiedAt = DateTime.Now,
                    Scene = scene,
                    SeatCapacity = subscene.SeatCapacity,
                    SubsceneCategoryId = subscene.SubsceneCategoryId,
                    RowsTotalNumber = subscene.RowsTotalNumber
                });
            }

            Context.SaveChanges();
        }
    }
}
