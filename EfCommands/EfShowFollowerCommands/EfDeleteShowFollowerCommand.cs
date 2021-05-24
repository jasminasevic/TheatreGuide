using Application.Commands.ShowFollowerCommands;
using Application.Interfaces;
using Application.Queries;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfShowFolloweCommands
{
    public class EfDeleteShowFollowerCommand : EfBaseCommand, IDeleteShowFollowerCommand
    {
        public EfDeleteShowFollowerCommand(EfContext context) : base(context)
        {
        }

        public int Id => 66;

        public string Name => "Delete Show Follower Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.User };

        public bool ContainsSensitiveData => false;

        public void Execute(ShowFollowerQuery query)
        {
            var follower = Context.ShowFollowers
                .Where(s => s.UserId.ToString() == query.UserId && s.ShowId.ToString() == query.ShowId)
                .FirstOrDefault();

            Context.ShowFollowers.Remove(follower);

            Context.SaveChanges();
        }
    }

}
