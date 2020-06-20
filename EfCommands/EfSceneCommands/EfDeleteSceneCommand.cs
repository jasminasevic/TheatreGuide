using Application.Commands.SceneCommands;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCommands.EfSceneCommands
{
    public class EfDeleteSceneCommand : EfBaseCommand, IDeleteSceneCommand
    {
        public EfDeleteSceneCommand(EfContext context) : base(context)
        {
        }

        public void Execute(int request)
        {
            var scene = Context.Scenes.Find(request);

            if (scene == null)
                throw new EntityNotFoundException(request.ToString());

            Context.Scenes.Remove(scene);
            Context.SaveChanges();
        }
    }
}
