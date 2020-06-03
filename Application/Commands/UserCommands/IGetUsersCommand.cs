using Application.DTO.UserDto;
using Application.Interfaces;
using Application.Queries;
using Application.Responses;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.UserCommands
{
    public interface IGetUsersCommand : ICommand<UserQuery, PagedResponses<GetUserDto>>
    {
    }
}
