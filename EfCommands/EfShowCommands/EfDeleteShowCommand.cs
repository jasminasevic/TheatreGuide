using Application.Commands.ShowCommands;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
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

            show.ModifiedAt = DateTime.Now;
            show.IsDeleted = true;

            Context.SaveChanges();
        }
    }
}
