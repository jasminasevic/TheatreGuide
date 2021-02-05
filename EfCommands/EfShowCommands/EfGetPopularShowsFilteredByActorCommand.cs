using Application.Commands.ShowCommands;
using Application.DTO.ActorDto;
using Application.DTO.ImageDto;
using Application.DTO.ShowDto;
using Application.Interfaces;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfShowCommands
{
    public class EfGetPopularShowsFilteredByActorCommand : EfBaseCommand, IGetPopularShowsFilteredByActorCommand
    {
        public EfGetPopularShowsFilteredByActorCommand(EfContext context) : base(context)
        {
        }

        public int Id => 55;

        public string Name => "Get Popular Shows Filtered By Actor Using EF";

        public IEnumerable<GetActorPopularShowDto> Execute(int request)
        {
            var actorInShow = Context.Actors
                .Include(a => a.ActorShows)
                .ThenInclude(a => a.Show)
                .ThenInclude(a => a.ShowFollowers)
                .Include(a => a.ActorShows)
                .ThenInclude(a => a.Show)
                .ThenInclude(a => a.ShowImages)
                .AsQueryable();

            if (Convert.ToInt32(request) != 0)
                actorInShow = actorInShow.Where(a => a.Id == Convert.ToInt32(request));

            var data = actorInShow.Select(a => new GetActorPopularShowDto
            {
                GetPopularShowsDtos = a.ActorShows.Select(shows => new GetPopularShowsDto
                {
                    Id = shows.ShowId,
                    Title = shows.Show.Title,
                    ShowImage = shows.Show.ShowImages.Select(image => new GetImageDto
                    {
                        Id = image.Id,
                        Alt = image.ShowImageAlt,
                        Path = "uploads/show-images/" + image.ShowImagePath
                    }).Take(1),
                    FollowersNumber = shows.Show.ShowFollowers.Count()
                }).OrderByDescending(s => s.FollowersNumber).Take(5)
            });

            return data;

        }
    }
}
