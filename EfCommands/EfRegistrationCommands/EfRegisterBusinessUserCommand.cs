using Application.Commands.RegistrationCommands;
using Application.DTO.EmailDto;
using Application.DTO.RegistrationDto;
using Application.Email;
using Application.Interfaces;
using Application.Validators.RegistrationValidators;
using EfDataAccess;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCommands.EfRegistrationCommands
{
    public class EfRegisterBusinessUserCommand : EfBaseCommand, IRegisterBusinessUserCommand
    {
        private readonly RegisterBusinessUserValidator _validator;
        private readonly IEmailSender _sender;

        public EfRegisterBusinessUserCommand(EfContext context, 
            RegisterBusinessUserValidator validator, IEmailSender sender) 
            : base(context)
        {
            _sender = sender;
            _validator = validator;
        }

        public int Id => 85;

        public string Name => "Register Business User Command Using EF";

        public IEnumerable<Role> Roles => new List<Role> { Role.Anonymus };

        public void Execute(RegisterBusinessUserDto request)
        {
            _validator.ValidateAndThrow(request);

            var address = new Domain.Address
            {
                Location = request.Location,
                Longitude = request.Longitude,
                Latitude = request.Latitude
            };

            Context.Addresses.Add(address);

            var theatre = new Domain.Theatre
            {
                TheatreName = request.Theatre,
                Address = address
            };

            Context.Theatres.Add(theatre);

            var user = new Domain.User
            {
                FirstName = request.FirstName,
                LastName = request.LastName,
                Email = request.Username,
                Password = request.Password,
                RoleId = 2,
                Status = Domain.User.StatusType.Pending,
                Theatre = theatre
            };

            Context.Users.Add(user);

            Context.SaveChanges();

            _sender.Send(new SendEmailDto
            {
                Content = "<h1>Thank you for your application!</h1>" +
               "<h2> We'll check it soon.</h2>",
                SendTo = request.Username,
                Subject = "Application Successful"
            });

        }
    }
}
