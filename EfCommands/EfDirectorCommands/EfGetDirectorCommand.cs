using Application.Commands.DirectorCommands;
using Application.DTO.DirectorDto;
using Application.DTO.ShowDto;
using Application.Exceptions;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfDirectorCommands
{
    public class EfGetDirectorCommand : EfBaseCommand, IGetDirectorCommand
    {
        public EfGetDirectorCommand(EfContext context) : base(context)
        {
        }

        public ShowDirectorDto Execute(int request)
        {
            var director = Context.Directors
                .Include(s => s.Shows)
                .Where(d => d.Id == request)
                .FirstOrDefault();

            if (director == null)
                throw new EntityNotFoundException(request.ToString());

            return new ShowDirectorDto
            {
                Id = director.Id,
                DirectorFirstName = director.DirectorFirstName,
                DirectorLastName = director.DirectorLastName,
                DirectorBiography = director.DirectorBiography,
                showBaseInfoDtos = director.Shows.Select(s => new ShowBaseInfoDto
                {
                    Id = s.Id,
                    Title = s.Title,
                    CategoryName = s.Title
                })
            };
        }
    }
}
