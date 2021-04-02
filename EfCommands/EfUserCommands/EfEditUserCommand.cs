using Application.Commands.UserCommands;
using Application.DTO.EmailDto;
using Application.DTO.UserDto;
using Application.Email;
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
        private readonly IEmailSender _sender;
        public EfEditUserCommand(EfContext context, UserValidator validator, IEmailSender sender)
            : base(context)
        {
            _validator = validator;
            _sender = sender;
        }

        public int Id => 76;

        public string Name => "Edit User Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin, Role.User, Role.Theatre };

        public void Execute(UserDto request)
        {
            _validator.ValidateAndThrow(request);

            var user = Context.Users.Find(request.Id);
            var previousUserStatus = user.Status.ToString();

            if (user.Email != request.Email
               && Context.Users.Any(u => u.Email == request.Email))
                throw new EntityAlreadyExistsException(request.Email);

            if (user == null)
                throw new EntityNotFoundException(user.Id.ToString());

            user.FirstName = request.FirstName;
            user.LastName = request.LastName;
            user.Email = request.Email;
            if (request.Password != null)
            {
                user.Password = request.Password;
            }
            user.RoleId = request.RoleId;
            user.TheatreId = request.TheatreId;
            user.Status = (Domain.User.StatusType)Enum.Parse(typeof(StatusType), request.Status);
            user.ModifiedAt = DateTime.Now;

            Context.SaveChanges();

            if(previousUserStatus != request.Status && request.RoleId == 2) 
            { 
                if(request.Status == "Approved") 
                {
                    _sender.Send(new SendEmailDto
                    {
                        Content = "<h1>You application has been approved!</h1>" +
                        "<h2> Login to your account to proceed.</h2>",
                        SendTo = request.Email,
                        Subject = "Application Approved"
                    });
                }
                if (request.Status == "Declined")
                {
                    _sender.Send(new SendEmailDto
                    {
                        Content = "<h1>You application has been declined!</h1>" +
                        "<h2> We're sorry to let you know that your application to Theatre Guide has been rejected.</h2>",
                        SendTo = request.Email,
                        Subject = "Application Rejected"
                    });
                }

            }
        }
    }
}
