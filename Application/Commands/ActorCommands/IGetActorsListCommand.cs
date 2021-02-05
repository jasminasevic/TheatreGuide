using Application.DTO.ActorDto;
using Application.Interfaces;
using Application.Queries;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.ActorCommands
{
    public interface IGetActorsListCommand : IQuery<SearchQuery, IEnumerable<GetActorBasicDto>>
    {
    }
}
