using Application.Commands.RepertoireCommands;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCommands.EfRepertoireCommands
{
    public class EfDeleteRepertoireCommand : EfBaseCommand, IDeleteRepertoireCommand
    {
        public EfDeleteRepertoireCommand(EfContext context) : base(context)
        {
        }

        public void Execute(int request)
        {
            var repertoire = Context.Repertoires.Find(request);

            if (repertoire == null)
                throw new EntityNotFoundException(request.ToString());

            Context.Repertoires.Remove(repertoire);
            Context.SaveChanges();
        }
    }
}
