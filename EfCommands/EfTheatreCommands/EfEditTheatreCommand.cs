﻿using Application.Commands.TheatreCommands;
using Application.DTO.TheatreDto;
using Application.Exceptions;
using Application.Helpers;
using EfDataAccess;
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
        public EfEditTheatreCommand(EfContext context) : base(context)
        {
        }

        public void Execute(TheatreDto request)
        {
            var theatre = Context.Theatres.Find(request.Id);

            if (theatre == null)
                throw new EntityNotFoundException(request.Id.ToString());

            theatre.TheatreName = request.Name;
            theatre.WorkingHours = request.WorkingHours;
            theatre.TheatreDescription = request.Description;
            theatre.ContactEmail = request.Email;
            request.Location = request.Location;
            request.Longitude = request.Longitude;
            request.Latitude = request.Latitude;

            foreach(var image in Context.TheatreImages.Where(ti => ti.TheatreId == request.Id))
            {
                Context.TheatreImages.Remove(image);
            }

            foreach(var theatreImage in request.TheatreImage)
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

            Context.SaveChanges();
        }
    }
}
