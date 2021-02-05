using Application.Commands.RoleCommands;
using Application.DTO.RoleDto;
using Application.Queries;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfRoleCommands
{
    public class EfGetRolesListCommand : EfBaseCommand, IGetRolesListCommand
    {
        public EfGetRolesListCommand(EfContext context) : base(context)
        {
        }

        public int Id => 42;

        public string Name => "Get Roles List Using EF";

        public IEnumerable<GetRoleDto> Execute(SearchQuery request)
        {
            var roles = Context.Roles
                .AsQueryable();

            var data = roles.Select(r => new GetRoleDto
            {
                Id = r.Id,
                RoleName = r.RoleName
            });

            data = data.OrderBy(r => r.RoleName);

            return data;
        }
    }
}
