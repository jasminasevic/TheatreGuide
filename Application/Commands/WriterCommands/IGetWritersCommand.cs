using Application.DTO.WriterDto;
using Application.Interfaces;
using Application.Queries;
using Application.Responses;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.WriterCommands
{
    public interface IGetWritersCommand : ICommand<WriterQuery, PagedResponses<GetWriterDto>>
    {
    }
}
