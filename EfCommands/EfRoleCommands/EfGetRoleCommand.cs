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
    public class EfGetRoleCommand : EfBaseCommand, IGetRoleCommand
    {
        public EfGetRoleCommand(EfContext context) : base(context)
        {
        }

        public ShowRoleDto Execute(int request)
        {
            var role = Context.Roles
                .Where(r => r.Id == request)
                .FirstOrDefault();

            if (role == null)
                throw new EntityNotFoundException(request.ToString());

            return new ShowRoleDto
            {
                Id = role.Id,
                RoleName = role.RoleName
            };
        }
    }
}
