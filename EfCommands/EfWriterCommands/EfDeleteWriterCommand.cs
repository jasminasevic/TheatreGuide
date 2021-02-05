using Application.Commands.WriterCommands;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCommands.EfWriterCommands
{
    public class EfDeleteWriterCommand : EfBaseCommand, IDeleteWriterCommand
    {
        public EfDeleteWriterCommand(EfContext context) : base(context)
        {
        }

        public int Id => 80;

        public string Name => "Delete Writer Using EF";

        public void Execute(int request)
        {
            var writer = Context.Writers.Find(request);

            if (writer == null)
                throw new EntityNotFoundException(request.ToString());

            Context.Writers.Remove(writer);

            Context.SaveChanges();


        }
    }
}
