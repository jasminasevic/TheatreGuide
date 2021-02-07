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
    public class EfGetPopularShowsCommand : EfBaseCommand, IGetPopularShowsCommand
    {
        public EfGetPopularShowsCommand(EfContext context) : base(context)
        {
        }

        public int Id => 54;

        public string Name => "Get Popular Shows Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin, Role.Theatre, Role.User };

        public IEnumerable<GetPopularShowsDto> Execute(ShowQuery request)
        {
            var shows = Context.Shows
                .Include(s => s.ShowFollowers)
                .Include(s => s.Theatre)
                .Include(s => s.ShowImages)
                .AsQueryable();

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
