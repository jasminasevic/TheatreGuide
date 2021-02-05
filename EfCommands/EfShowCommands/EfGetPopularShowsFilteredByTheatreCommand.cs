using Application.Commands.ShowCommands;
using Application.DTO.ImageDto;
using Application.DTO.ShowDto;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfShowCommands
{
    public class EfGetPopularShowsFilteredByTheatreCommand : EfBaseCommand, IGetPopularShowsFilteredByTheatreCommand
    {
        public EfGetPopularShowsFilteredByTheatreCommand(EfContext context) : base(context)
        {
        }

        public int Id => 59;

        public string Name => "Get Popular Shows Filtered By Theatre Using EF";

        public IEnumerable<GetPopularShowsDto> Execute(int request)
        {
            var shows = Context.Shows
                .Include(s => s.ShowFollowers)
                .Include(s => s.Theatre)
                .Include(s => s.ShowFollowers)
                .AsQueryable();

            if (Convert.ToInt32(request) != 0)
                shows = shows.Where(s => s.TheatreId == Convert.ToInt32(request));

            var data = shows.Select(s => new GetPopularShowsDto
            {
                Id = s.Id,
                Title = s.Title,
                ShowImage = s.ShowImages.Select(si => new GetImageDto
                {
                    Id = si.Id,
                    Alt = si.ShowImageAlt,
                    Path = "uploads/show-images/" + si.ShowImagePath
                }).Take(1),
                TheatreId = s.TheatreId,
                TheatreName = s.Theatre.TheatreName,
                FollowersNumber = s.ShowFollowers.Count()
            });

            data = data.OrderByDescending(s => s.FollowersNumber).Take(5);

            return data;
        }
    }
}
