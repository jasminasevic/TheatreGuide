using Application.DTO.LoggingDto;
using Application.Interfaces;
using Application.Queries;
using Application.Responses;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.LoggingCommands
{
    public interface IGetLoggingsCommand : IQuery<LoggingQuery, PagedResponses<GetLoggingDto>>
    {
    }
}
