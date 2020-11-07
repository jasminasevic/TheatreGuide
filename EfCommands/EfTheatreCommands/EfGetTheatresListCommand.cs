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

        public IEnumerable<TheatreBasic> Execute(SearchQuery request)
        {
            var theatres = Context.Theatres
               .AsQueryable();

            var data = theatres.Select(t => new TheatreBasic
            {
                Id = t.Id,
                TheatreName = t.TheatreName
            });

            return data;
        }
    }
}
