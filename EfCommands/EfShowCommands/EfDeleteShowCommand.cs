using Application.Commands.ShowCommands;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCommands.EfShowCommands
{
    public class EfDeleteShowCommand : EfBaseCommand, IDeleteShowCommand
    {
        public EfDeleteShowCommand(EfContext context) : base(context)
        {
        }

        public void Execute(int request)
        {
            var show = Context.Shows.Find(request);

            if (show == null)
                throw new EntityNotFoundException(show.Id.ToString());

            Context.Shows.Remove(show);
            Context.SaveChanges();
        }
    }
}
