using Application.Commands.RoleCommands;
using Application.DTO.RoleDto;
using Application.Exceptions;
using Application.Interfaces;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfRoleCommands
{
    public class EfAddRoleCommand : EfBaseCommand, IAddRoleCommand
    {
        public EfAddRoleCommand(EfContext context) : base(context)
        {
        }

        public int Id => 37;

        public string Name => "Add New Role Using EF";


        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin };

        public void Execute(RoleDto request)
        {
            if (Context.Roles.Any(r => r.RoleName == request.RoleName))
                throw new EntityAlreadyExistsException(request.RoleName);

            Context.Roles.Add(new Domain.Role
            {
                RoleName = request.RoleName
            });

            Context.SaveChanges();


        }
    }
}
