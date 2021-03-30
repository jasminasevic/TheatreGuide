using Application.Commands.ShowCommands;
using Application.DTO.ShowDto;
using Application.Exceptions;
using Application.Interfaces;
using Application.Queries;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfShowCommands
{
    public class EfGetShowBaseListFilteredByTheatreCommand : EfBaseCommand, IGetShowBaseListFilteredByTheatreCommand
    {
        public EfGetShowBaseListFilteredByTheatreCommand(EfContext context) : base(context)
        {
        }

        public int Id => 92;

        public string Name => "Get Show Base Info Listing for Repertoire Using EF";

        public IEnumerable<Role> Roles => new List<Role> { Role.Theatre };

        public IEnumerable<GetShowBaseListingDto> Execute(ShowQuery query)
        {
            var shows = Context.Shows
                .Where(s => s.TheatreId.ToString() == query.TheatreId)
                .AsQueryable();

            if (shows == null)
                throw new EntityNotFoundException(query.TheatreId.ToString());

            var data = shows.Select(s => new GetShowBaseListingDto
            {
                Id = s.Id,
                Title = s.Title
            }).OrderBy(s => s.Title);

            return data;


        }
    }
}
