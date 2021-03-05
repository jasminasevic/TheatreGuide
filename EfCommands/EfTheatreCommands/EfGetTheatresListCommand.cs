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
    public class EfGetTheatresListCommand : EfBaseCommand, IGetTheatresListCommand
    {
        public EfGetTheatresListCommand(EfContext context) : base(context)
        {
        }

        public int Id => 73;

        public string Name => "Get Theatre List Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Anonymus, Role.Admin, Role.Theatre, Role.User };

        public IEnumerable<TheatreBasicDto> Execute(SearchQuery request)
        {
            var theatres = Context.Theatres
               .Where(t => t.IsVisible == true)
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
