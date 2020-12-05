using Application.DTO.RoleDto;
using Application.Interfaces;
using Application.Queries;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.RoleCommands
{
    public interface IGetRolesListCommand : ICommand<SearchQuery, IEnumerable<GetRoleDto>>
    {
    }
}
