using Application.Commands.ShowCommands;
using Application.DTO.SectorDto;
using Application.DTO.ShowDto;
using Application.Queries;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfShowCommands
{
    public class EfGetShowsListCommand : EfBaseCommand, IGetShowsListCommand
    {
        public EfGetShowsListCommand(EfContext context) : base(context)
        {
        }

        public int Id => 63;

        public string Name => "Get Shows List Using EF";

        public IEnumerable<GetShowBasicDto> Execute(SearchQuery request)
        {
            var shows = Context.Shows
                .Include(t => t.Theatre)
                .Include(t => t.Scene)
                .ThenInclude(s => s.Sectors)
                .AsQueryable();

            var data = shows.Select(s => new GetShowBasicDto
            {
                Id = s.Id,
                Title = s.Title,
                SceneId = s.SceneId,
                SceneName = s.Scene.SceneName,
                TheatreId = s.TheatreId,
                TheatreName = s.Theatre.TheatreName,
                GetSectorDtos = s.Scene.Sectors.Select(se => new GetSectorDto 
                { 
                    Id = se.Id,
                    SectorName = se.SectorName,
                    RowsTotalNumber = se.RowsTotalNumber,
                    SeatCapacity = se.SeatCapacity
                })
            });

            data = data.OrderBy(s => s.Title);

            return data;
        }
    }
}
