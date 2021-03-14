﻿using Application.Commands.ShowCommands;
using Application.DTO.ShowDto;
using Application.Exceptions;
using Application.Helpers;
using Application.Interfaces;
using Application.Validators.ShowValidators;
using EfDataAccess;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace EfCommands.EfShowCommands
{
    public class EfEditShowCommand : EfBaseCommand, IEditShowCommand
    {
        protected readonly ShowValidator _validator;
        public EfEditShowCommand(EfContext context, ShowValidator validator) 
            : base(context)
        {
            _validator = validator;
        }

        public int Id => 53;

        public string Name => "Edit Show Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin, Role.Theatre };

        public void Execute(ShowDto request)
        {
            _validator.ValidateAndThrow(request);

            var show = Context.Shows.Find(request.Id);

            if (show == null)
                throw new EntityNotFoundException(show.Id.ToString());

            show.Title = request.Title;
            show.ShowDescription = request.Description;
            show.Duration = request.Duration;
            show.PremiereDate = request.PremiereDate;
            show.ContentAdvisory = request.ContentAdvisory;
            show.TheatreId = request.TheatreId;
            show.CategoryId = request.CategoryId;
            show.DirectorId = request.DirectorId;
            show.Writer = request.Writer;
            show.SceneId = request.SceneId;
            show.ModifiedAt = DateTime.Now;

            if (request.ShowImages != null)
            {
                foreach (var showImage in Context.ShowImages.Where(s => s.ShowId == request.Id))
                {
                    Context.ShowImages.Remove(showImage);
                }

                foreach (var image in request.ShowImages)
                {
                    var ext = Path.GetExtension(image.FileName);
                    if (!FileUpload.AllowedExtensions.Contains(ext))
                    {
                        throw new Exception("File extention is not ok");
                    };

                    var newFileName = Guid.NewGuid().ToString() + "_" + image.FileName;
                    var filePath = Path.Combine(Directory.GetCurrentDirectory(),
                        "wwwroot", "uploads", "show-images", newFileName);

                    image.CopyTo(new FileStream(filePath, FileMode.Create));

                    var showImage = new Domain.ShowImage
                    {
                        ShowImageAlt = request.Title + " image",
                        ShowImagePath = newFileName,
                        ShowId = request.Id
                    };

                    Context.ShowImages.Add(showImage);
                }
            }

            foreach(var actorShow in Context.ActorShows.Where(s => s.ShowId == request.Id))
            {
                Context.ActorShows.Remove(actorShow);
            }

            foreach(var actor in request.ActorShowDtos)
            {
                Context.ActorShows.Add(new Domain.ActorShow
                {
                    ActorId = actor.ActorId,
                    ActorRoleName = actor.ActorRoleName,
                    ActorRoleDescription = actor.ActorRoleDescription,
                    ShowId = request.Id
                });
            }


            Context.SaveChanges();

        }
    }
}
