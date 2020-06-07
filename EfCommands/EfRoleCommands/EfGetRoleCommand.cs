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
    public class EfGetRoleCommand : EfBaseCommand, IGetRoleCommand
    {
        public EfGetRoleCommand(EfContext context) : base(context)
        {
        }

        public GetRoleDto Execute(int request)
        {
            var role = Context.Roles
                .Where(r => r.Id == request)
                .FirstOrDefault();

            if (role == null)
                throw new EntityNotFoundException(request.ToString());

            return new GetRoleDto
            {
                Id = role.Id,
                RoleName = role.RoleName
            };
        }
    }
}
