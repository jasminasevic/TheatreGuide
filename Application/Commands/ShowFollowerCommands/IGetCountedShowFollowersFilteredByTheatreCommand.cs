using Application.DTO.ShowFollowerDto;
using Application.Interfaces;
using Application.Queries;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.ShowFollowerCommands
{
    public interface IGetCountedShowFollowersFilteredByTheatreCommand : IQuery<ShowFollowerQuery, int>
    {
    }
}
