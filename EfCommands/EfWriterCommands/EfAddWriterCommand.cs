using Application.Commands.WriterCommands;
using Application.DTO.WriterDto;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfWriterCommands
{
    public class EfAddWriterCommand : EfBaseCommand, IAddWriterCommand
    {
        public EfAddWriterCommand(EfContext context) : base(context)
        {
        }

        public int Id => 79;

        public string Name => "Add New Writer Using EF";


        public void Execute(WriterDto request)
        {
            if (Context.Writers.Any(w => w.WriterFirstName.ToLower() == request.WriterFirstName
             && w.WriterLastName.ToLower() == request.WriterLastName.ToLower()))
                throw new EntityAlreadyExistsException(request.ToString());

            Context.Writers.Add(new Domain.Writer
            {
                WriterFirstName = request.WriterFirstName,
                WriterLastName = request.WriterLastName,
                WriterBiography = request.WriterBiography
            });

            Context.SaveChanges();
                
        }
    }
}
