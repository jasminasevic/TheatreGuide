using Application.Commands.ShowCommands;
using Application.DTO.ImageDto;
using Application.DTO.ShowDto;
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
    public class EfGetPopularShowsFilteredByIdAndTheatreCommand : EfBaseCommand, IGetPopularShowsFilteredByIdAndTheatreCommand
    {
        public EfGetPopularShowsFilteredByIdAndTheatreCommand(EfContext context) : base(context)
        {
        }

        public int Id => 57;

        public string Name => "Get Popular Shows Filtered By Id and Theatre Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Anonymus, Role.Admin, Role.Theatre, Role.User };

        public bool ContainsSensitiveData => false;

        public IEnumerable<GetPopularShowsDto> Execute(ShowQuery request)
        {
            var shows = Context.Shows
                .Include(s => s.ShowFollowers)
                .Include(s => s.Theatre)
                .Include(s => s.ShowFollowers)
                .AsQueryable();

            if (Convert.ToInt32(request.TheatreId) != 0)
                shows = shows.Where(s => s.TheatreId == Convert.ToInt32(request.TheatreId));

            if (Convert.ToInt32(request.ShowId) != 0)
                shows = shows.Where(s => s.Id != Convert.ToInt32(request.ShowId));

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
