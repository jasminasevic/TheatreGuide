using Application.Commands.DirectorCommands;
using Application.DTO.DirectorDto;
using Application.Queries;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfDirectorCommands
{
    public class EfGetDirectorsListCommand : EfBaseCommand, IGetDirectorsListCommand
    {
        public EfGetDirectorsListCommand(EfContext context) : base(context)
        {
        }

        public IEnumerable<GetDirectorBasicDto> Execute(SearchQuery request)
        {
            var directors = Context.Directors
                .AsQueryable();

            var data = directors.Select(d => new GetDirectorBasicDto
            {
                Id = d.Id,
                FirstName = d.DirectorFirstName,
                LastName = d.DirectorLastName
            });

            data = data.OrderBy(d => d.FirstName);

            return data;
        }
    }
}
