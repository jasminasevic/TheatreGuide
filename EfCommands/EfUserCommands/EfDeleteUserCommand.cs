using Application.Commands.UserCommands;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCommands.EfUserCommands
{
    public class EfDeleteUserCommand : EfBaseCommand, IDeleteUserCommand
    {
        public EfDeleteUserCommand(EfContext context) : base(context)
        {
        }

        public int Id => 75;

        public string Name => "Delete User Using EF";

        public void Execute(int request)
        {
            var user = Context.Users.Find(request);

            if (user == null)
                throw new EntityNotFoundException(request.ToString());

            Context.Users.Remove(user);
            Context.SaveChanges();
        }
    }
}
