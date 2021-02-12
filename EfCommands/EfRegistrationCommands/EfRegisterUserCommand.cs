using System;
using System.Collections.Generic;
using System.Text;
using Application.Commands.RegistrationCommands;
using Application.DTO.RegistrationDto;
using Application.Interfaces;
using Application.Validators.RegistrationValidators;
using EfDataAccess;
using FluentValidation;

namespace EfCommands.EfRegistrationCommands
{
    public class EfRegisterUserCommand : EfBaseCommand, IRegisterUserCommand
    {
        protected readonly RegisterUserValidator _validator;
        public EfRegisterUserCommand(EfContext context, RegisterUserValidator validator) 
            : base(context)
        {
            _validator = validator;
        }

        public int Id => 84;

        public string Name => "Register User Command Using EF";

        public IEnumerable<Role> Roles => new List<Role> { Role.Anonymus };

        public void Execute(RegisterUserDto request)
        {
            _validator.ValidateAndThrow(request);

            Context.Users.Add(new Domain.User
            {
                FirstName = request.FirstName,
                LastName = request.LastName,
                Email = request.Email,
                Password = request.Password,
                RoleId = 3
            });

            Context.SaveChanges();
        }
    }
}
