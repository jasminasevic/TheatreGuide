using Application.Commands.ContactUsCommands;
using Application.DTO.EmailDto;
using Application.Email;
using Application.Interfaces;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCommands.EfContactUsComands
{
    public class EfAddContactUsMessageCommand : EfBaseCommand, IAddContactUsMessageCommand
    {
        private readonly IEmailSender _sender;
        public EfAddContactUsMessageCommand(EfContext context, IEmailSender sender) : base(context)
        {
            _sender = sender;
        }

        public int Id => 103;

        public string Name => "Send Contact Us Form Command Using EF";

        public IEnumerable<Role> Roles => new List<Role> { Role.Admin, Role.Anonymus, Role.Theatre, Role.User };

        public void Execute(SendEmailDto request)
        {
            _sender.Send(new SendEmailDto
            {
                Content = request.Content,
                SendTo = "theatreguideapp@gmail.com",
                Subject = "New email received - Theatre Guide"
            });
        }
    }
}
