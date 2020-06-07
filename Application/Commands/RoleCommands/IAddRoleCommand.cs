using Application.DTO.RoleDto;
using Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.RoleCommands
{
    public interface IAddRoleCommand : ICommand<RoleDto>
    {
    }
}
