using Application.Commands.ShowCommands;
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
    public class EfAddShowCommand : EfBaseCommand, IAddShowCommand
    {
        protected readonly ShowValidator _validator;
        public EfAddShowCommand(EfContext context, ShowValidator validator) 
            : base(context)
        {
            _validator = validator;
        }

        public int Id => 51;

        public string Name => "Add New Show Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin, Role.Theatre };

        public void Execute(ShowDto request)
        {
            _validator.ValidateAndThrow(request);
            
            if (Context.Shows.Any(s => s.Title.ToLower().Contains(request.Title)
                 && s.TheatreId == request.TheatreId))
                throw new EntityAlreadyExistsException(request.Title);

            var show = new Domain.Show
            {
                Title = request.Title,
                ShowDescription = request.Description,
                Duration = request.Duration,
                ContentAdvisory = request.ContentAdvisory,
                PremiereDate = request.PremiereDate,
                CategoryId = request.CategoryId,
                Writer = request.Writer,
                DirectorId = request.DirectorId,
                TheatreId = request.TheatreId,
                SceneId = request.SceneId
            };

            Context.Shows.Add(show);


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
                    Show = show
                };

                Context.ShowImages.Add(showImage);
            }


            foreach (var actor in request.ActorShowDtos)
            {
                Context.ActorShows.Add(new Domain.ActorShow
                {
                    ActorId = actor.ActorId,
                    ActorRoleName = actor.ActorRoleName,
                    ActorRoleDescription = actor.ActorRoleDescription,
                    Show = show
                });
            }

            Context.SaveChanges();
        }
    }
}
