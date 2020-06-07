﻿using Application.Commands.TheatreCommands;
using Application.DTO.ImageDto;
using Application.DTO.ShowDto;
using Application.DTO.TheatreDto;
using Application.Exceptions;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfTheatreCommands
{
    public class EfGetTheatreCommand : EfBaseCommand, IGetTheatreCommand
    {
        public EfGetTheatreCommand(EfContext context) : base(context)
        {
        }

        public GetTheatreDto Execute(int request)
        {
            var theatre = Context.Theatres
                .Include(t => t.TheatreImages)
                .Include(t => t.Address)
                .Include(t => t.Shows)
                .ThenInclude(s => s.Category)
                .Where(t => t.Id == request)
                .FirstOrDefault();

            if (theatre == null)
                throw new EntityNotFoundException("Theatre cannot be found.");

            return new GetTheatreDto
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
                    Path = ti.TheatreImagePath
                }),
                ShowBaseInfoDtos = theatre.Shows.Select(s => new ShowBaseInfoDto
                {
                    Id = s.Id,
                    Title = s.Title,
                    CategoryName = s.Category.CategoryName
                })
            };
        }
    }
}
