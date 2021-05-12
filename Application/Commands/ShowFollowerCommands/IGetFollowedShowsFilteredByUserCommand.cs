using Application.DTO.ShowFollowerDto;
using Application.Interfaces;
using Application.Queries;
using Application.Responses;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.ShowFollowerCommands
{
    public interface IGetFollowedShowsFilteredByUserCommand : IQuery<ShowQuery, PagedResponses<GetFollowedShowsDto>>
    {
    }
}
