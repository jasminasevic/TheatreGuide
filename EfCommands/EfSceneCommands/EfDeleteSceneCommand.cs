﻿using Application.Commands.SceneCommands;
using Application.Exceptions;
using Application.Interfaces;
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

        public int Id => 44;

        public string Name => "Delete Scene Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin, Role.Theatre };

        public bool ContainsSensitiveData => false;

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
