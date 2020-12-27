using Application.Commands.ActorCommands;
using Application.DTO.ActorDto;
using Application.DTO.ImageDto;
using Application.DTO.ShowDto;
using Application.DTO.TheatreDto;
using Application.Exceptions;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfActorCommands
{
    public class EfGetActorCommand : EfBaseCommand, IGetActorCommand
    {
        public EfGetActorCommand(EfContext context) : base(context)
        {
        }

        public GetActorDto Execute(int request)
        {
            var actor = Context.Actors
                .Include(a => a.ActorImages)
                .Include(a => a.ActorShows)
                .ThenInclude(a => a.Show)
                .ThenInclude(a => a.Scene)
                .ThenInclude(a => a.Theatre)
                .Include(a => a.ActorShows)
                .ThenInclude(a => a.Show)
                .ThenInclude(a => a.Category)
                .Include(a => a.ActorShows)
                .ThenInclude(a => a.Show)
                .ThenInclude(a => a.ShowImages)
                .Where(a => a.Id == request)
                .FirstOrDefault();

            if (actor == null)
                throw new EntityNotFoundException(request.ToString());

            return new GetActorDto
            {
                Id = actor.Id,
                ActorFirstName = actor.ActorFirstName,
                ActorLastName = actor.ActorLastName,
                ActorBiography = actor.ActorBiography,
                ShowImageDto = actor.ActorImages.Select(i => new GetImageDto
                {
                    Id = i.Id,
                    Alt = i.ActorImageAlt,
                    Path = "uploads/actor-images/" + i.ActorImagePath
                }),
                ActorInShow = actor.ActorShows.Select(s => new ShowBaseInfoDto
                {
                    Id = s.Show.Id,
                    Title = s.Show.Title,
                    CategoryName = s.Show.Category.CategoryName,
                    ShowImageDtos = s.Show.ShowImages.Select(i => new GetImageDto 
                    { 
                        Id = i.Id,
                        Alt = i.ShowImageAlt,
                        Path = "uploads/show-images/" + i.ShowImagePath
                    }).Take(1)
                }),
                TheatreBasicDtos = actor.ActorShows.Select(t => new TheatreBasicDto
                {
                    Id = t.Show.Scene.Theatre.Id,
                    TheatreName = t.Show.Scene.Theatre.TheatreName
                })
                .GroupBy(t => new { t.Id, t.TheatreName })
                .Select(g => g.First())
                .ToList()
            };
        }
    }
}
