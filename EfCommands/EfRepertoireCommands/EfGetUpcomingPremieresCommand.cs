using Application.Commands.RepertoireCommands;
using Application.DTO.ImageDto;
using Application.DTO.RepertoireDto;
using Application.Interfaces;
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

        public int Id => 35;

        public string Name => "Get Upcoming Premieres Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Anonymus, Role.Admin, Role.Theatre, Role.User };

        public bool ContainsSensitiveData => false;

        public IEnumerable<GetUpcomingPremieresDto> Execute(RepertoireQuery request)
        {
            var upcomingPremieres = Context.Repertoires
                .Include(r => r.Show)
                .ThenInclude(r => r.ShowImages)
                .Include(r => r.Theatre)
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
                TheatreId = s.TheatreId,
                TheatreName = s.Theatre.TheatreName,
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
