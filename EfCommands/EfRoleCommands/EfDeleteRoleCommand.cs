﻿using Application.Commands.RoleCommands;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfRoleCommands
{
    public class EfDeleteRoleCommand : EfBaseCommand, IDeleteRoleCommand
    {
        public EfDeleteRoleCommand(EfContext context) : base(context)
        {
        }

        public int Id => 38;

        public string Name => "Delete Role Using EF";

        public IEnumerable<Application.Interfaces.Role> Roles => new List<Application.Interfaces.Role>() { Application.Interfaces.Role.Admin };

        public bool ContainsSensitiveData => false;

        public void Execute(int request)
        {
            var role = Context.Roles.Find(request);

            if (role == null)
                throw new EntityNotFoundException(request.ToString());

            Context.Roles.Remove(role);
            Context.SaveChanges();
        }
    }
}
