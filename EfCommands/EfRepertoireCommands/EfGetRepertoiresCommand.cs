using Application.Commands.RepertoireCommands;
using Application.DTO.ImageDto;
using Application.DTO.PriceDto;
using Application.DTO.RepertoireDto;
using Application.Interfaces;
using Application.Queries;
using Application.Responses;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfRepertoireCommands
{
    public class EfGetRepertoiresCommand : EfBaseCommand, IGetRepertoiresCommand
    {
        public EfGetRepertoiresCommand(EfContext context) : base(context)
        {
        }

        public int Id => 34;

        public string Name => "Get Repertoires Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Anonymus, Role.Admin, Role.Theatre, Role.User };

        public PagedResponses<GetRepertoireDto> Execute(RepertoireQuery request)
        {
            var repertoires = Context.Repertoires
                .Include(t => t.Theatre)
                .Include(s => s.Show)
                .ThenInclude(s => s.ShowImages)
                .AsQueryable();

            //Filtering logic

            if (request.TheatreName != null)
                repertoires = repertoires.Where(r => r.Theatre.TheatreName.ToLower()
                .Contains(request.TheatreName.ToLower()));

            if (request.ShowTitle != null)
                repertoires = repertoires.Where(r => r.Show.Title.ToLower()
                .Contains(request.ShowTitle.ToLower()));

            if (request.Location != null)
                repertoires = repertoires.Where(r => r.Theatre.Location.ToLower()
                 .Contains(request.Location.ToLower()) 
                 || r.Theatre.TheatreName.ToLower()
                 .Contains(request.Location.ToLower()));

            if(request.SearchQuery != null)
                repertoires = repertoires.Where(r => r.Show.Title.ToLower()
               .Contains(request.SearchQuery.ToLower()));

            var data = repertoires.Select(r => new GetRepertoireDto
            {
                Id = r.Id,
                ShowId = r.ShowId,
                ShowName = r.Show.Title,
                TheatreId = r.TheatreId,
                TheatreName = r.Theatre.TheatreName,
                ShowDate = r.Date,
                IsPremiere = r.IsPremiere,
                GetImageDtos = r.Show.ShowImages.Select(si => new GetImageDto
                {
                    Id = si.Id,
                    Alt = si.ShowImageAlt,
                    Path = "/uploads/show-images/" + si.ShowImagePath
                }).Take(1)
            });

            data = data.Where(s => s.ShowDate > DateTime.Now);

            string dateString = request.ShowDate;

            if (dateString != null)
            {
                DateTime dateTime = DateTime.Parse(dateString);
                DateTime convertedDate = dateTime;
                data = data.Where(s => s.ShowDate.Date == convertedDate.Date);
            }

            var sortOrder = request.SortOrder;

            switch (sortOrder)
            {
                case "name_desc":
                    data = data.OrderByDescending(r => r.ShowName);
                    break;
                case "name_asc":
                    data = data.OrderBy(r => r.ShowName);
                    break;
                case "theatre_desc":
                    data = data.OrderByDescending(r => r.TheatreName);
                    break;
                case "theatre_asc":
                    data = data.OrderBy(r => r.TheatreName);
                    break;
                case "show_desc":
                    data = data.OrderByDescending(r => r.ShowName);
                    break;
                case "show_asc":
                    data = data.OrderBy(r => r.ShowName);
                    break;
                case "date_desc":
                    data = data.OrderByDescending(r => r.ShowDate);
                    break;
                case "date_asc":
                    data = data.OrderBy(r => r.ShowDate);
                    break;
                case "isPremiere_desc":
                    data = data.OrderByDescending(r => r.IsPremiere);
                    break;
                case "isPremiere_asc":
                    data = data.OrderBy(r => r.IsPremiere);
                    break;
                default:
                    data = data.OrderBy(r => r.ShowDate);
                    break;
            }

            var totalCount = data.Count();

            data = data.Skip((request.PageNumber - 1) * request.PerPage).Take(request.PerPage);
            var pagesCount = (int)Math.Ceiling((double)totalCount / request.PerPage);

            return new PagedResponses<GetRepertoireDto>
            {
                PageNumber = request.PageNumber,
                PagesCount = pagesCount,
                TotalCount = totalCount,
                Data = data
            };

        }
    }
}
