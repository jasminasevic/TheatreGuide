using Application.DTO.ActorDto;
using Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.ShowCommands
{
    public interface IGetPopularShowsFilteredByActorCommand : IQuery<int, IEnumerable<GetActorPopularShowDto>>
    {
    }
}
