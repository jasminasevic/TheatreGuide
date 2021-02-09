using Application.Commands.WriterCommands;
using Application.DTO.WriterDto;
using Application.Exceptions;
using Application.Interfaces;
using Application.Validators.WriterValidators;
using EfDataAccess;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCommands.EfWriterCommands
{
    public class EfEditWriterCommand : EfBaseCommand, IEditWriterCommand
    {
        protected readonly WriterValidator _validator;
        public EfEditWriterCommand(EfContext context, 
            WriterValidator validator) : base(context)
        {
            _validator = validator;
        }

        public int Id => 81;

        public string Name => "Edit Writer Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin, Role.Theatre };

        public void Execute(WriterDto request)
        {
            _validator.ValidateAndThrow(request);

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
