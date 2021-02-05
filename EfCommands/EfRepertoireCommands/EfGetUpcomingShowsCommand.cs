using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Text;
using Application.Commands.RepertoireCommands;
using Application.DTO.RepertoireDto;
using Application.Queries;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Application.DTO.ImageDto;

namespace EfCommands.EfRepertoireCommands
{
    public class EfGetUpcomingShowsCommand : EfBaseCommand, IGetUpcomingShowsCommand
    {
        public EfGetUpcomingShowsCommand(EfContext context) : base(context)
        {
        }

        public int Id => 36;

        public string Name => "Get Upcoming Shows Using EF";

        public IEnumerable<GetUpcomingShowsDto> Execute(RepertoireQuery request)
        {
            var upcomingShows = Context.Repertoires
                .Include(r => r.Show)
                .ThenInclude(r => r.ShowImages)
                .Include(r => r.Theatre)
                .Include(r => r.Show)
                .ThenInclude(r => r.ShowFollowers)
                .AsQueryable();

            var data = upcomingShows.Select(s => new GetUpcomingShowsDto
            {
                Id = s.Id,
                Title = s.Show.Title,
                ShowImage = s.Show.ShowImages.Select(si => new GetImageDto
                {
                    Id = si.Id,
                    Alt = si.ShowImageAlt,
                    Path = "uploads/show-images/" + si.ShowImagePath
                }).Take(1),
                TheatreId = s.TheatreId,
                TheatreName = s.Theatre.TheatreName,
                ShowDate = s.Date,
                FollowersNumber = s.Show.ShowFollowers.Count()
            });

            data = data.Where(d => d.ShowDate > DateTime.Now);
            data = data.OrderBy(d => d.ShowDate).Take(5);

            return data;
        }
    }
}
