using Application.Commands.TheatreCommands;
using Application.DTO.TheatreDto;
using Application.Interfaces;
using Application.Queries;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfTheatreCommands
{
    public class EfGetAllTheatresListCommand : EfBaseCommand, IGetAllTheatresListCommand
    {
        public EfGetAllTheatresListCommand(EfContext context) : base(context)
        {
        }

        public int Id => 86;

        public string Name => "Get All Theatres List Command Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin };

        public bool ContainsSensitiveData => false;

        public IEnumerable<TheatreBasicDto> Execute(SearchQuery request)
        {
            var theatres = Context.Theatres
               .AsQueryable();

            var data = theatres.Select(t => new TheatreBasicDto
            {
                Id = t.Id,
                TheatreName = t.TheatreName
            });

            data = data.OrderBy(t => t.TheatreName);

            return data;
        }
    }
}
