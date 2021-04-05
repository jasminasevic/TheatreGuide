using Application.Commands.ShowFollowerCommands;
using Application.DTO.ShowFollowerDto;
using Application.Interfaces;
using Application.Queries;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfShowFollowerCommands
{
    public class EfGetCountedShowFollowersFilteredByTheatreCommand : EfBaseCommand, IGetCountedShowFollowersFilteredByTheatreCommand
    {
        public EfGetCountedShowFollowersFilteredByTheatreCommand(EfContext context) : base(context)
        {
        }

        public int Id => 96;

        public string Name => "Get Number of Show Followers Filtered by Theatre Using EF";

        public IEnumerable<Role> Roles => new List<Role> { Role.Theatre };

        public int Execute(ShowFollowerQuery query)
        {
            var showFollowers = Context.ShowFollowers
                .Include(s => s.Show)
                .Where(s => s.Show.TheatreId == query.TheatreId)
                .Count();

            return showFollowers;
        }
    }
}
