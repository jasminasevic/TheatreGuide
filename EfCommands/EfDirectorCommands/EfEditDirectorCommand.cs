using Application.Commands.DirectorCommands;
using Application.DTO.DirectorDto;
using Application.Exceptions;
using Application.Interfaces;
using Application.Validators.DirectorValidators;
using EfDataAccess;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCommands.EfDirectorCommands
{
    public class EfEditDirectorCommand : EfBaseCommand, IEditDirectorCommand
    {
        protected readonly DirectorValidator _validator;
        public EfEditDirectorCommand(EfContext context, DirectorValidator validator) 
            : base(context)
        {
            _validator = validator;
        }

        public int Id => 21;

        public string Name => "Edit Director Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin, Role.Theatre };

        public bool ContainsSensitiveData => false;

        public void Execute(DirectorDto request)
        {
            _validator.ValidateAndThrow(request);

            var director = Context.Directors.Find(request.Id);

            if (director == null)
                throw new EntityNotFoundException(request.ToString());

            director.DirectorFirstName = request.DirectorFirstName;
            director.DirectorLastName = request.DirectorLastName;
            director.DirectorBiography = request.DirectorBiography;

            Context.SaveChanges();
        }

      
    }
}
