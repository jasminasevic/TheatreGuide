using Application.Commands.TheatreCommands;
using Application.DTO.TheatreDto;
using Application.Exceptions;
using Application.Helpers;
using Application.Interfaces;
using Application.Validators.TheatreValidators;
using EfDataAccess;
using FluentValidation;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace EfCommands.EfTheatreCommands
{
    public class EfEditTheatreCommand : EfBaseCommand, IEditTheatreCommand
    {
        protected readonly TheatreValidator _validator;
        public EfEditTheatreCommand(EfContext context, TheatreValidator validator) 
            : base(context)
        {
            _validator = validator;
        }

        public int Id => 69;

        public string Name => "Edit Theatre Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin, Role.Theatre };

        public bool ContainsSensitiveData => false;

        public void Execute(TheatreDto request)
        {
            _validator.ValidateAndThrow(request);

            var theatre = Context.Theatres.Find(request.Id);

            if (theatre.ContactEmail != request.Email
               && Context.Theatres.Any(t => t.ContactEmail == request.Email))
                throw new EntityAlreadyExistsException(request.Email);

            if (theatre == null)
                throw new EntityNotFoundException(request.Id.ToString());

            theatre.TheatreName = request.Name;
            theatre.WorkingHours = request.WorkingHours;
            theatre.TheatreDescription = request.Description;
            theatre.ContactEmail = request.Email;
            theatre.ContactTelephone = request.Telephone;
            theatre.IsVisible = request.IsVisible;
            theatre.Location = request.Location;
            theatre.Latitude = request.Latitude;
            theatre.Longitude = request.Longitude;

            if (request.TheatreImage != null)
            {
                foreach (var image in Context.TheatreImages.Where(ti => ti.TheatreId == request.Id))
                {
                    Context.TheatreImages.Remove(image);
                }

                foreach (var theatreImage in request.TheatreImage)
                {
                    var ext = Path.GetExtension(theatreImage.FileName);

                    if (!FileUpload.AllowedExtensions.Contains(ext))
                    {
                        throw new Exception("File extension is not ok");
                    }

                    var newFileName = Guid.NewGuid().ToString() + "_" + theatreImage.FileName;
                    var filePath = Path.Combine(Directory.GetCurrentDirectory(),
                        "wwwroot", "uploads", "theatre-images", newFileName);
                    theatreImage.CopyTo(new FileStream(filePath, FileMode.Create));


                    Context.TheatreImages.Add(new Domain.TheatreImage
                    {
                        TheatreImageAlt = request.Name + " image",
                        TheatreImagePath = newFileName,
                        TheatreId = request.Id
                    });
                }
            }
            Context.SaveChanges();
        }
    }
}
