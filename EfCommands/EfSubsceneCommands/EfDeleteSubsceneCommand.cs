using Application.Commands.SubsceneCommands;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCommands.EfSubsceneCommands
{
    public class EfDeleteSubsceneCommand : EfBaseCommand, IDeleteSubsceneCommand
    {
        public EfDeleteSubsceneCommand(EfContext context) : base(context)
        {
        }

        public void Execute(int request)
        {
            var subscene = Context.Subscenes.Find(request);

            if (subscene == null)
                throw new EntityNotFoundException(request.ToString());

            Context.Subscenes.Remove(subscene);
            Context.SaveChanges();
        }
    }
}
