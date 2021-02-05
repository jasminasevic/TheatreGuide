using Application.DTO.RoleDto;
using Application.Interfaces;
using Application.Queries;
using Application.Responses;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.RoleCommands
{
    public interface IGetRolesCommand : IQuery<RoleQuery, PagedResponses<GetRoleDto>>
    {
    }
}
