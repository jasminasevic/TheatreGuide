using Application.Commands.ActorCommands;
using Application.DTO.ActorDto;
using Application.Exceptions;
using Application.Helpers;
using Application.Interfaces;
using Application.Validators.ActorValidators;
using EfDataAccess;
using FluentValidation;
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
        protected readonly ActorValidator _validator;
        public EfEditActorCommand(EfContext context, ActorValidator validator) 
            : base(context)
        {
            _validator = validator;
        }

        public int Id => 3;

        public string Name => "Edit Actor Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin, Role.Theatre };

        public void Execute(ActorDto request)
        {
            _validator.ValidateAndThrow(request);
            //If there is an exception it will catch ValidationException in GlobalExceptionHandler

            var actor = Context.Actors.Find(request.Id);

            if (actor == null)
                throw new EntityNotFoundException(request.Id.ToString());

            actor.ActorFirstName = request.ActorFirstName;
            actor.ActorLastName = request.ActorLastName;
            actor.ActorBiography = request.ActorBiography;
            actor.ModifiedAt = DateTime.Now;

            if (request.ActorImage != null)
            {

                foreach (var image in Context.ActorImages.Where(ai => ai.ActorId == request.Id))
                {
                    Context.ActorImages.Remove(image);
                }

                foreach (var actorImage in request.ActorImage)
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
            }

            Context.SaveChanges();
        }
    }
}
