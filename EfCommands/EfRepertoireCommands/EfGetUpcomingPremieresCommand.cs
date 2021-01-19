using Application.Commands.RepertoireCommands;
using Application.DTO.ImageDto;
using Application.DTO.RepertoireDto;
using Application.Queries;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfRepertoireCommands
{
    public class EfGetUpcomingPremieresCommand : EfBaseCommand, IGetUpcomingPremieresCommand
    {
        public EfGetUpcomingPremieresCommand(EfContext context) : base(context)
        {
        }

        public IEnumerable<GetUpcomingPremieresDto> Execute(RepertoireQuery request)
        {
            var upcomingPremieres = Context.Repertoires
                .Include(r => r.Show)
                .ThenInclude(r => r.ShowImages)
                .Include(r => r.Show)
                .ThenInclude(r => r.Theatre)
                .Include(r => r.Show)
                .ThenInclude(r => r.Category)
                .AsQueryable();

            var data = upcomingPremieres.Select(s => new GetUpcomingPremieresDto
            {
                Id = s.Id,
                Title = s.Show.Title,
                ShowImage = s.Show.ShowImages.Select(si => new GetImageDto
                {
                    Id = si.Id,
                    Alt = si.ShowImageAlt,
                    Path = "uploads/show-images/" + si.ShowImagePath
                }).Take(1),
                TheatreId = s.Show.TheatreId,
                TheatreName = s.Show.Theatre.TheatreName,
                ShowDate = s.Date,
                Category = s.Show.Category.CategoryName,
                IsPremiere = s.IsPremiere
            });

            data = data.Where(d => d.ShowDate > DateTime.Now && d.IsPremiere == true);
            data = data.OrderBy(d => d.ShowDate).Take(5);

            return data;
        }
    }
}
