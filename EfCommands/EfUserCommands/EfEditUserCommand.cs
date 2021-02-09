using Application.Commands.UserCommands;
using Application.DTO.UserDto;
using Application.Exceptions;
using Application.Interfaces;
using Application.Validators.UserValidators;
using EfDataAccess;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfUserCommands
{
    public class EfEditUserCommand : EfBaseCommand, IEditUserCommand
    {
        protected readonly UserValidator _validator;
        public EfEditUserCommand(EfContext context, UserValidator validator) 
            : base(context)
        {
            _validator = validator;
        }

        public int Id => 76;

        public string Name => "Edit User Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin, Role.User };

        public void Execute(UserDto request)
        {
            _validator.ValidateAndThrow(request);

            var user = Context.Users.Find(request.Id);

            if (user.Email != request.Email
               && Context.Users.Any(u => u.Email == request.Email))
                throw new EntityAlreadyExistsException(request.Email);

            if (user == null)
                throw new EntityNotFoundException(user.Id.ToString());

            user.FirstName = request.FirstName;
            user.LastName = request.LastName;
            user.Email = request.Email;
            user.Password = request.Password;
            user.RoleId = request.RoleId;
            user.ModifiedAt = DateTime.Now;

            Context.SaveChanges();
        }
    }
}
