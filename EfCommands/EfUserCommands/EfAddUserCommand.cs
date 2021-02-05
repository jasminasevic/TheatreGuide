using Application.Commands.UserCommands;
using Application.DTO.UserDto;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfUserCommands
{
    public class EfAddUserCommand : EfBaseCommand, IAddUserCommand
    {
        public EfAddUserCommand(EfContext context) : base(context)
        {
        }

        public int Id => 74;

        public string Name => "Add New User Using EF";


        public void Execute(UserDto request)
        {
            if (Context.Users.Any(u => u.Email == request.Email))
                throw new EntityAlreadyExistsException(request.Email);

            Context.Users.Add(new Domain.User
            {
                FirstName = request.FirstName,
                LastName = request.LastName,
                Email = request.Email,
                Password = request.Password,
                RoleId = request.RoleId
            });

            Context.SaveChanges();
        }
    }
}
