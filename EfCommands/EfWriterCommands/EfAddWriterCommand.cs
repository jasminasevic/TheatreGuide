using Application.Commands.WriterCommands;
using Application.DTO.WriterDto;
using Application.Exceptions;
using Application.Interfaces;
using Application.Validators.WriterValidators;
using EfDataAccess;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfWriterCommands
{
    public class EfAddWriterCommand : EfBaseCommand, IAddWriterCommand
    {
        protected readonly WriterValidator _validator;
        public EfAddWriterCommand(EfContext context, WriterValidator validator) 
            : base(context)
        {
            _validator = validator;
        }

        public int Id => 79;

        public string Name => "Add New Writer Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin, Role.Theatre };

        public bool ContainsSensitiveData => false;

        public void Execute(WriterDto request)
        {
            _validator.ValidateAndThrow(request);

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
