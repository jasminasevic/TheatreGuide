using Application.Commands.ActorCommands;
using Application.DTO.ActorDto;
using Application.Exceptions;
using Application.Helpers;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace EfCommands.EfActorCommands
{
    public class EfEditActorCommand : EfBaseCommand, IEditActorCommand
    {
        public EfEditActorCommand(EfContext context) : base(context)
        {
        }

        public void Execute(ActorDto request)
        {
            var actor = Context.Actors.Find(request.Id);

            if (actor == null)
                throw new EntityNotFoundException(request.Id.ToString());

            actor.ActorFirstName = request.ActorFirstName;
            actor.ActorLastName = request.ActorLastName;
            actor.ActorBiography = request.ActorBiography;
            actor.ModifiedAt = DateTime.Now;

            foreach(var image in Context.ActorImages.Where(ai => ai.ActorId == request.Id))
            {
                Context.ActorImages.Remove(image);
            }

            foreach(var actorImage in request.ActorImage)
            {

                var ext = Path.GetExtension(actorImage.FileName);
                if (!FileUpload.AllowedExtensions.Contains(ext))
                {
                    throw new Exception("File extension is not ok");
                }
                var newFileName = Guid.NewGuid().ToString() + "_" + actorImage.FileName;
                var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads", "actor-images", newFileName);
                actorImage.CopyTo(new FileStream(filePath, FileMode.Create));

                Context.ActorImages.Add(new Domain.ActorImage
                {
                    ActorImageAlt = request.ActorFirstName + " " + request.ActorLastName + " image",
                    ActorImagePath = newFileName,
                    ActorId = actor.Id,
                });
            }

            Context.SaveChanges();
        }
    }
}
