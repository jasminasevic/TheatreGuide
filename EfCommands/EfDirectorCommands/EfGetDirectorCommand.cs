using Application.Commands.DirectorCommands;
using Application.DTO.DirectorDto;
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

namespace EfCommands.EfDirectorCommands
{
    public class EfGetDirectorCommand : EfBaseCommand, IGetDirectorCommand
    {
        public EfGetDirectorCommand(EfContext context) : base(context)
        {
        }

        public GetDirectorDto Execute(int request)
        {
            var director = Context.Directors
                .Include(s => s.Shows)
                .ThenInclude(s => s.ShowImages)
                .Include(s => s.Shows)
                .ThenInclude(s => s.Category)
                .Include(s => s.Shows)
                .ThenInclude(s => s.Scene)
                .ThenInclude(s => s.Theatre)
                .Where(d => d.Id == request)
                .FirstOrDefault();

            if (director == null)
                throw new EntityNotFoundException(request.ToString());

            return new GetDirectorDto
            {
                Id = director.Id,
                DirectorFirstName = director.DirectorFirstName,
                DirectorLastName = director.DirectorLastName,
                DirectorBiography = director.DirectorBiography,
                ShowBaseInfoDtos = director.Shows.Select(s => new ShowBaseInfoDto
                {
                    Id = s.Id,
                    Title = s.Title,
                    CategoryName = s.Category.CategoryName,
                    ShowImageDtos = s.ShowImages.Select(si => new GetImageDto
                    {
                        Id = si.Id,
                        Alt = si.ShowImageAlt,
                        Path = "uploads/show-images/" + si.ShowImagePath
                    }).Take(1)
                }),
                TheatreBasicDtos = director.Shows.Select(t => new TheatreBasicDto
                {
                    Id = t.Scene.Theatre.Id,
                    TheatreName = t.Scene.Theatre.TheatreName
                })
                .GroupBy(t => new { t.Id, t.TheatreName })
                .Select(g => g.First())
                .ToList()
            };
        }
    }
}
