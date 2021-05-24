using Application.Commands.UserCommands;
using Application.DTO.UserDto;
using Application.Exceptions;
using Application.Interfaces;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfUserCommands
{
    public class EfGetUserFilteredByIdCommand : EfBaseCommand, IGetUserFilteredByIdCommand
    {
        public EfGetUserFilteredByIdCommand(EfContext context) : base(context)
        {
        }

        public int Id => 95;

        public string Name => "Get User Filtered By Theatre Using EF";

        public IEnumerable<Role> Roles => new List<Role> { Role.Theatre, Role.User };

        public bool ContainsSensitiveData => false;

        public UserDto Execute(int request)
        {
            var user = Context.Users
                .Include(u => u.Theatre)
                .FirstOrDefault(u => u.Id == request);

            if (user == null)
                throw new EntityNotFoundException(request.ToString());

            return new UserDto
            {
                Id = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                TheatreId = user.TheatreId == null ? null : user.TheatreId,
                TheatreName = user.Theatre == null ? "" : user.Theatre.TheatreName,
                RoleId = user.RoleId,
                Status = user.Status.ToString()
            };
        }
    }
}
