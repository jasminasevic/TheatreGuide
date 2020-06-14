using Application.Commands.ShowCommands;
using Application.DTO.ActorDto;
using Application.DTO.ImageDto;
using Application.DTO.ShowDto;
using Application.Exceptions;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfShowCommands
{
    public class EfGetShowCommand : EfBaseCommand, IGetShowCommand
    {
        public EfGetShowCommand(EfContext context) : base(context)
        {
        }

        public GetShowDto Execute(int request)
        {
            var show = Context.Shows
                .Include(s => s.ShowImages)
                .Include(s => s.Category)
                .Include(s => s.Writer)
                .Include(s => s.Director)
                .Include(s => s.Theatre)
                .Include(s => s.ActorShows)
                .ThenInclude(s => s.Actor)
                .Where(s => s.Id == request)
                .FirstOrDefault();

            if (show == null)
                throw new EntityNotFoundException(request.ToString());

            return new GetShowDto
            {
                Id = show.Id,
                Title = show.Title,
                Category = show.Category.CategoryName,
                WriterFirstName = show.Writer.WriterFirstName,
                WriterLastName = show.Writer.WriterLastName,
                DirectorFirstName = show.Director.DirectorFirstName,
                DirectorLastName = show.Director.DirectorLastName,
                Description = show.ShowDescription,
                Duration = show.Duration,
                ContentAdvisory = show.ContentAdvisory,
                PremiereDate = show.PremiereDate,
                Theatre = show.Theatre.TheatreName,
                ShowImageDtos = show.ShowImages.Select(i => new GetImageDto
                {
                    Id = i.Id,
                    Alt = i.ShowImageAlt,
                    Path = i.ShowImagePath
                }),
                ActorShowDtos = show.ActorShows.Select(a => new ActorShowDto
                {
                    ActorId = a.ActorId,
                    ActorFirstName = a.Actor.ActorFirstName,
                    ActorLastName = a.Actor.ActorLastName,
                    ActorRoleDescription = a.ActorRoleDescription,
                    ActorRoleName = a.ActorRoleName
                })
            };
        }
    }
}
