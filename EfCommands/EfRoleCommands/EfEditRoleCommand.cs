using Application.Commands.RoleCommands;
using Application.DTO.RoleDto;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfRoleCommands
{
    public class EfEditRoleCommand : EfBaseCommand, IEditRoleCommand
    {
        public EfEditRoleCommand(EfContext context) : base(context)
        {
        }

        public int Id => 39;

        public string Name => "Edit Role Using EF";

        public void Execute(RoleDto request)
        {
            var role = Context.Roles.Find(request.Id);

            if (role == null)
                throw new EntityNotFoundException(request.Id.ToString());

            if (request.RoleName.ToLower() != role.RoleName.ToLower()
                && Context.Roles.Any(r => r.RoleName.ToLower() == request.RoleName.ToLower()))
                throw new EntityAlreadyExistsException(request.RoleName);

            role.RoleName = request.RoleName;

            Context.SaveChanges();
        }
    }
}
