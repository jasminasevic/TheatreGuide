using Application.DTO.DirectorDto;
using Application.Interfaces;
using Application.Queries;
using Application.Responses;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.DirectorCommands
{
    public interface IGetDirectorsCommand : IQuery<DirectorQuery, PagedResponses<GetDirectorDto>>
    {
    }
}
