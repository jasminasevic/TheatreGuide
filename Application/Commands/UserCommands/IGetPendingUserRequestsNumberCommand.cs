using Application.DTO.UserDto;
using Application.Interfaces;
using Application.Queries;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.UserCommands
{
    public interface IGetPendingUserRequestsNumberCommand : IQuery<UserQuery, int>
    {
    }
}
