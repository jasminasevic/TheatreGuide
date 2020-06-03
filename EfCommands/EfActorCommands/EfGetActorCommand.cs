using Application.Commands.ActorCommands;
using Application.DTO.ActorDto;
using Application.DTO.ImageDto;
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
                    Path = i.ActorImagePath
                })
            };
        }
    }
}
