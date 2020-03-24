using Application.Commands.WriterCommands;
using Application.DTO.WriterDto;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCommands.EfWriterCommands
{
    public class EfEditWriterCommand : EfBaseCommand, IEditWriterCommand
    {
        public EfEditWriterCommand(EfContext context) : base(context)
        {
        }

        public void Execute(WriterDto request)
        {
            var writer = Context.Writers.Find(request.Id);

            if (writer == null)
                throw new EntityNotFoundException(request.ToString());

            writer.WriterFirstName = request.WriterFirstName;
            writer.WriterLastName = request.WriterLastName;
            writer.WriterBiography = request.WriterBiography;

            Context.SaveChanges();
        }
    }
}
