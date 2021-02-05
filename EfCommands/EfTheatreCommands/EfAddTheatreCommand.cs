using Application.Commands.TheatreCommands;
using Application.DTO.TheatreDto;
using Application.Exceptions;
using Application.Helpers;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace EfCommands.EfTheatreCommands
{
    public class EfAddTheatreCommand : EfBaseCommand, IAddTheatreCommand
    {
        public EfAddTheatreCommand(EfContext context) : base(context)
        {
        }

        public int Id => 67;

        public string Name => "Add New Theatre Using EF";

        public void Execute(TheatreDto request)
        {
            if (Context.Theatres.Any(t => t.ContactEmail.ToLower()
             .Contains(request.Email.ToLower())))
                throw new EntityAlreadyExistsException(request.Email);

            if (request.Name == null)
                throw new Exception("Theatre name is required.");

            var address = new Domain.Address
            {
                Location = request.Location,
                Longitude = request.Longitude,
                Latitude = request.Latitude
            };

            Context.Addresses.Add(address);

            var theatre = new Domain.Theatre
            {
                TheatreName = request.Name,
                ContactEmail = request.Email,
                ContactTelephone = request.Telephone,
                WorkingHours = request.WorkingHours,
                TheatreDescription = request.Description,
                Address = address
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
