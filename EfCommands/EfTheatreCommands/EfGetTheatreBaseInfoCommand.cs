using Application.Commands.TheatreCommands;
using Application.DTO.ImageDto;
using Application.DTO.TheatreDto;
using Application.Exceptions;
using Application.Interfaces;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfTheatreCommands
{
    public class EfGetTheatreBaseInfoCommand : EfBaseCommand, IGetTheatreBaseInfoCommand
    {
        public EfGetTheatreBaseInfoCommand(EfContext context) : base(context)
        {
        }

        public int Id => 90;

        public string Name => "Get Theatre Info for Edit Using EF";

        public IEnumerable<Role> Roles => new List<Role> { Role.Admin, Role.Theatre };

        public TheatreForEditDto Execute(int request)
        {
            var theatre = Context.Theatres
                .Include(t => t.TheatreImages)
                .Include(t => t.Address)
                .Where(t => t.Id == request)
                .FirstOrDefault();

            if (theatre == null)
                throw new EntityNotFoundException("Theatre cannot be found.");

            return new TheatreForEditDto
            {
                Id = theatre.Id,
                Name = theatre.TheatreName,
                Description = theatre.TheatreDescription,
                Email = theatre.ContactEmail,
                Telephone = theatre.ContactTelephone,
                WorkingHours = theatre.WorkingHours,
                Location = theatre.Address.Location,
                Latitude = theatre.Address.Latitude,
                Longitude = theatre.Address.Longitude,
                ShowImageDtos = theatre.TheatreImages.Select(ti => new GetImageDto
                {
                    Id = ti.Id,
                    Alt = ti.TheatreImageAlt,
                    Path = "uploads/theatre-images/" + ti.TheatreImagePath
                })
            };
        }
    }
}
