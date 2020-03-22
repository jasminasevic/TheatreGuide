using Application.Commands.Role_Commands;
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

        public void Execute(RoleDto request)
        {
            var role = Context.Roles.Find(request.Id);

            if (role == null)
                throw new EntityNotFoundException(request.Id.ToString());

            if (request.RoleName != role.RoleName 
                && Context.Roles.Any(r => r.RoleName == request.RoleName))
                throw new EntityAlreadyExistsException(request.RoleName);

            role.RoleName = request.RoleName;

            Context.SaveChanges();
        }
    }
}
