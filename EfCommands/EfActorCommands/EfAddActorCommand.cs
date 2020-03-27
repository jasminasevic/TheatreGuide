﻿using Application.Commands.ActorCommands;
using Application.DTO.ActorDto;
using Application.Exceptions;
using Application.Helpers;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace EfCommands.EfActorCommands
{
    public class EfAddActorCommand : EfBaseCommand, IAddActorCommand
    {
        public EfAddActorCommand(EfContext context) : base(context)
        {
        }

        public void Execute(ActorDto request)
        {
            if (Context.Actors.Any(a => a.ActorFirstName.ToLower() == request.ActorFirstName
             && a.ActorLastName.ToLower() == request.ActorLastName.ToLower()))
                throw new EntityAlreadyExistsException(request.ActorFirstName + " " + request.ActorLastName);

            var actor = new Domain.Actor
            {
                ActorFirstName = request.ActorFirstName,
                ActorLastName = request.ActorLastName,
                ActorBiography = request.ActorBiography
            };

            Context.Actors.Add(actor);


            if (request.ActorImage != null)
            {
                foreach(var image in request.ActorImage)
                {
                    var ext = Path.GetExtension(image.FileName);

                    if (!FileUpload.AllowedExtensions.Contains(ext))
                    {
                        throw new Exception("File extension is not ok");
                    }

                    var newFileName = Guid.NewGuid().ToString() + "_" + image.FileName;
                    var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads", "actor-images", newFileName);

                    image.CopyTo(new FileStream(filePath, FileMode.Create));

                    var actorImage = new Domain.ActorImage
                    {
                        ActorImageAlt = request.ActorFirstName + " " + request.ActorLastName,
                        ActorImagePath = newFileName,
                        Actor = actor
                    };

                    Context.ActorImages.Add(actorImage);
                }
            }

            Context.SaveChanges();

        }
    }
}
