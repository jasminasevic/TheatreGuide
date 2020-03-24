using Application.Commands.DirectorCommands;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCommands.EfDirectorCommands
{
    public class EfDeleteDirectorCommand : EfBaseCommand, IDeleteDirectorCommand
    {
        public EfDeleteDirectorCommand(EfContext context) : base(context)
        {
        }

        public void Execute(int request)
        {
            var director = Context.Directors.Find(request);

            if (director == null)
                throw new EntityNotFoundException(request.ToString());

            Context.Directors.Remove(director);

            Context.SaveChanges();
        }
    }
}
