using Application.Commands.UserCommands;
using Application.DTO.UserDto;
using Application.Exceptions;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfUserCommands
{
    public class EfGetUserCommand : EfBaseCommand, IGetUserCommand
    {
        public EfGetUserCommand(EfContext context) : base(context)
        {
        }

        public GetUserDto Execute(int request)
        {
            var user = Context.Users
                .Include(u => u.Role)
                .Where(u => u.Id == request)
                .FirstOrDefault();

            if (user == null)
                throw new EntityNotFoundException(request.ToString());

            return new GetUserDto
            {
                Id = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                RoleId = user.RoleId,
                RoleName = user.Role.RoleName
            };
        }
    }
}
