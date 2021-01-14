using Application.DTO.RepertoireDto;
using Application.Interfaces;
using Application.Queries;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.RepertoireCommands
{
    public interface IGetUpcomingShowsCommand : ICommand<RepertoireQuery, IEnumerable<GetUpcomingShowsDto>>
    {
    }
}
