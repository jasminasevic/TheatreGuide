using Application.DTO.SubsceneDto;
using Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.SubsceneCommands
{
    public interface IAddSubsceneCommand : ICommand<AddSubsceneDto>
    {
    }
}
