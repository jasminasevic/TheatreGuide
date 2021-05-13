using Application.DTO.EmailDto;
using Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.ContactUsCommands
{
    public interface IAddContactUsMessageCommand : ICommand<SendEmailDto>
    {
    }
}
