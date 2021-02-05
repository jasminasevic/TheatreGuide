using Application.DTO.UserDto;
using Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.UserCommands
{
    public interface IGetUserCommand : IQuery<int, GetUserDto>
    {
    }
}
