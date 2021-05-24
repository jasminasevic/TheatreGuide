using Application.Commands.TheatreCommands;
using Application.DTO.TheatreDto;
using Application.Exceptions;
using Application.Helpers;
using Application.Interfaces;
using Application.Validators.TheatreValidators;
using EfDataAccess;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace EfCommands.EfTheatreCommands
{
    public class EfAddTheatreCommand : EfBaseCommand, IAddTheatreCommand
    {
        protected readonly TheatreValidator _validator;
        public EfAddTheatreCommand(EfContext context, TheatreValidator validator) 
            : base(context)
        {
            _validator = validator;
        }

        public int Id => 67;

        public string Name => "Add New Theatre Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin, Role.Theatre };

        public bool ContainsSensitiveData => false;

        public void Execute(TheatreDto request)
        {
            _validator.ValidateAndThrow(request);

            if (Context.Theatres.Any(t => t.ContactEmail.ToLower()
             .Contains(request.Email.ToLower())))
                throw new EntityAlreadyExistsException(request.Email);

            var theatre = new Domain.Theatre
            {
                TheatreName = request.Name,
                ContactEmail = request.Email,
                ContactTelephone = request.Telephone,
                WorkingHours = request.WorkingHours,
                TheatreDescription = request.Description,
                Location = request.Location,
                Longitude = request.Longitude,
                Latitude = request.Latitude
            };

            Context.Theatres.Add(theatre);

            if(request.TheatreImage != null)
            {
                foreach(var image in request.TheatreImage)
                {
                    var ext = Path.GetExtension(image.FileName);
                    if (!FileUpload.AllowedExtensions.Contains(ext))
                    {
                        throw new Exception("File extension is not ok.");
                    };

                    var newFileName = Guid.NewGuid().ToString() + "_" + image.FileName;
                    var filePath = Path.Combine(Directory.GetCurrentDirectory(), 
                        "wwwroot", "uploads", "theatre-images", newFileName);

                    image.CopyTo(new FileStream(filePath, FileMode.Create));

                    var theatreImage = new Domain.TheatreImage
                    {
                        TheatreImageAlt = request.Name + " in " + request.Location,
                        TheatreImagePath = newFileName,
                        Theatre = theatre
                    };

                    Context.TheatreImages.Add(theatreImage);
                }
            }

            Context.SaveChanges();

        }
    }
}
