using Application.Commands.TheatreCommands;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCommands.EfTheatreCommands
{
    public class EfDeleteTheatreCommand : EfBaseCommand, IDeleteTheatreCommand
    {
        public EfDeleteTheatreCommand(EfContext context) : base(context)
        {
        }

        public void Execute(int request)
        {
            var theatre = Context.Theatres.Find(request);

            if (theatre == null)
                throw new EntityNotFoundException(request.ToString());

            Context.Theatres.Remove(theatre);
            Context.SaveChanges();
        }
    }
}
