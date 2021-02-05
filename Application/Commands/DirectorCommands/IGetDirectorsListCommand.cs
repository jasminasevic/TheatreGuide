using Application.DTO.DirectorDto;
using Application.Interfaces;
using Application.Queries;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.DirectorCommands
{
    public interface IGetDirectorsListCommand : IQuery<SearchQuery, IEnumerable<GetDirectorBasicDto>>
    {
    }
}
