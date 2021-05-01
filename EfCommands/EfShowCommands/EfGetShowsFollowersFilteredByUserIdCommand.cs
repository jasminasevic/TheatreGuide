using Application.Commands.ShowCommands;
using Application.DTO.ShowFollowerDto;
using Application.Interfaces;
using Application.Queries;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfShowCommands
{
    public class EfGetShowsFollowersFilteredByUserIdCommand : EfBaseCommand, IGetShowsFollowersFilteredByUserIdCommand
    {
        public EfGetShowsFollowersFilteredByUserIdCommand(EfContext context) : base(context)
        {
        }

        public int Id => 100;

        public string Name => "Get Follower Filtered By User Using Ef Command";

        public IEnumerable<Role> Roles => new List<Role> { Role.Admin, Role.Theatre, Role.User };

        public bool Execute(ShowQuery query)
        {
            var isFollowing = Context.ShowFollowers
                .Where(sf => sf.UserId.ToString() == query.UserId && sf.ShowId.ToString() == query.ShowId)
                .FirstOrDefault();

            if(isFollowing != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
