using Application.Commands.DirectorCommands;
using Application.DTO.DirectorDto;
using Application.Exceptions;
using Application.Interfaces;
using Application.Validators.DirectorValidators;
using EfDataAccess;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfDirectorCommands
{
    public class EfAddDirectorCommand : EfBaseCommand, IAddDirectorCommand
    {
        protected readonly DirectorValidator _validator;
        public EfAddDirectorCommand(EfContext context, DirectorValidator validator) 
            : base(context)
        {
            _validator = validator;
        }

        public int Id => 19;

        public string Name => "Add New Director Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin, Role.Theatre };

        public void Execute(DirectorDto request)
        {
            _validator.ValidateAndThrow(request);

            if (Context.Directors.Any(d => d.DirectorFirstName.ToLower() == request.DirectorFirstName.ToLower()
             && d.DirectorLastName.ToLower() == request.DirectorLastName.ToLower()))
                throw new EntityAlreadyExistsException(request.ToString());

            Context.Directors.Add(new Domain.Director
            {
                DirectorFirstName = request.DirectorFirstName,
                DirectorLastName = request.DirectorLastName,
                DirectorBiography = request.DirectorBiography
            });

            Context.SaveChanges();
                
        }
    }
}
