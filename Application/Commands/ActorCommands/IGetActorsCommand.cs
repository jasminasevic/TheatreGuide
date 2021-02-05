using Application.DTO.ActorDto;
using Application.Interfaces;
using Application.Queries;
using Application.Responses;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.ActorCommands
{
    public interface IGetActorsCommand : IQuery<ActorQuery, PagedResponses<GetActorDto>>
    {
    }
}
