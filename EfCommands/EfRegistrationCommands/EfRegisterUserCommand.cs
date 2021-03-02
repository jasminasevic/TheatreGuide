using System;
using System.Collections.Generic;
using System.Text;
using Application.Commands.RegistrationCommands;
using Application.DTO.EmailDto;
using Application.DTO.RegistrationDto;
using Application.Email;
using Application.Interfaces;
using Application.Validators.RegistrationValidators;
using EfDataAccess;
using FluentValidation;

namespace EfCommands.EfRegistrationCommands
{
    public class EfRegisterUserCommand : EfBaseCommand, IRegisterUserCommand
    {
        private readonly RegisterUserValidator _validator;
        private readonly IEmailSender _sender;
        public EfRegisterUserCommand(EfContext context, RegisterUserValidator validator, IEmailSender sender)
            : base(context)
        {
            _validator = validator;
            _sender = sender;
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
                Email = request.Username,
                Password = request.Password,
                RoleId = 3
            });

            _sender.Send(new SendEmailDto
            {
                Content = "<h1>Thank you for your registration!</h1>" +
                "<h2> Please login to proceed.</h2>",
                SendTo = request.Username,
                Subject = "Registration Successful"
            });

            Context.SaveChanges();
        }
    }
}
