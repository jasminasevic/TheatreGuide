using Application.Commands.DirectorCommands;
using Application.DTO.DirectorDto;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfDirectorCommands
{
    public class EfAddDirectorCommand : EfBaseCommand, IAddDirectorCommand
    {
        public EfAddDirectorCommand(EfContext context) : base(context)
        {
        }

        public int Id => 19;

        public string Name => "Add New Director Using EF";

        public void Execute(DirectorDto request)
        {
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
