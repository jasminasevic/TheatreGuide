using Application.DTO.ShowDto;
using Application.Interfaces;
using Application.Queries;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.ShowCommands
{
    public interface IGetPopularShowsFilteredByIdCommand : IQuery<int, IEnumerable<GetPopularShowsDto>> 
    {
    }
}
