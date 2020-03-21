using Application.DTO.RoleDto;
using Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.Role_Commands
{
    public interface IGetRoleCommand : ICommand<int, ShowRoleDto>
    {
    }
}
