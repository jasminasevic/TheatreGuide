using Application.Commands.TheatreCommands;
using Application.DTO.ImageDto;
using Application.DTO.TheatreDto;
using Application.Queries;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfTheatreCommands
{
    public class EfGetRecentlyJoinedTheatresCommand : EfBaseCommand, IGetRecentlyJoinedTheatresCommand
    {
        public EfGetRecentlyJoinedTheatresCommand(EfContext context) : base(context)
        {
        }

        public IEnumerable<GetTheatreBaseInfoDto> Execute(SearchQuery request)
        {
            var theatre = Context.Theatres
                .Include(t => t.Address)
                .Include(t => t.TheatreImages)
                .AsQueryable();

            var data = theatre.Select(t => new GetTheatreBaseInfoDto
            {
                Id = t.Id,
                Name = t.TheatreName,
                Location = t.Address.Location,
                ShowImageDtos = t.TheatreImages.Select(i => new GetImageDto
                {
                    Id = i.Id,
                    Alt = i.TheatreImageAlt,
                    Path = "/uploads/theatre-images/" + i.TheatreImagePath
                }).Take(1),
                CreatedAt = t.CreatedAt
            });

            data = data.OrderByDescending(t => t.CreatedAt).Take(4);

            return data;

        }
    }
}
