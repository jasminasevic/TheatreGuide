using Application.DTO.WriterDto;
using Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.WriterCommands
{
    public interface IEditWriterCommand : ICommand<WriterDto>
    {
    }
}
