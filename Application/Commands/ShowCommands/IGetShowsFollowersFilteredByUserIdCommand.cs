using Application.DTO.ShowFollowerDto;
using Application.Interfaces;
using Application.Queries;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.ShowCommands
{
    public interface IGetShowsFollowersFilteredByUserIdCommand : IQuery<ShowQuery, bool>
    {
    }
}
