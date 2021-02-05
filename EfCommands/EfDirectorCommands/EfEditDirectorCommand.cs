using Application.Commands.DirectorCommands;
using Application.DTO.DirectorDto;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCommands.EfDirectorCommands
{
    public class EfEditDirectorCommand : EfBaseCommand, IEditDirectorCommand
    {
        public EfEditDirectorCommand(EfContext context) : base(context)
        {
        }

        public int Id => 21;

        public string Name => "Edit Director Using EF";

        public void Execute(DirectorDto request)
        {
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
