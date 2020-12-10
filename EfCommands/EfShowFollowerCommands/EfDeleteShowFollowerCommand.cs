using Application.Commands.ShowFollowerCommands;
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

        public void Execute(int requestFirst, int requestSecond)
        {
            var follower = Context.Users.Find(requestFirst);

            var show = Context.ShowFollowers.Where(s => s.ShowId == requestSecond)
                .FirstOrDefault();

            follower.ShowFollowers.Remove(show);

            Context.SaveChanges();
            
        }
    }

}
