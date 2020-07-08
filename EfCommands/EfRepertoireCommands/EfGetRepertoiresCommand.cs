using Application.Commands.RepertoireCommands;
using Application.DTO.PriceDto;
using Application.DTO.RepertoireDto;
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

        public PagedResponses<GetRepertoireDto> Execute(RepertoireQuery request)
        {
            var repertoires = Context.Repertoires
                .Include(s => s.Show)
                .ThenInclude(t => t.Theatre)
                .AsQueryable();

            //Filtering logic

            if (request.TheatreName != null)
                repertoires = repertoires.Where(r => r.Show.Theatre.TheatreName.ToLower()
                .Contains(request.TheatreName.ToLower()));

            if (request.ShowTitle != null)
                repertoires = repertoires.Where(r => r.Show.Title.ToLower()
                .Contains(request.ShowTitle.ToLower()));

            if(request.SearchQuery != null)
                repertoires = repertoires.Where(r => r.Show.Theatre.TheatreName.ToLower()
               .Contains(request.TheatreName.ToLower())
               || r.Show.Title.ToLower()
               .Contains(request.ShowTitle.ToLower()));

            var data = repertoires.Select(r => new GetRepertoireDto
            {
                Id = r.Id,
                ShowId = r.ShowId,
                ShowName = r.Show.Title,
                TheatreId = r.Show.TheatreId,
                TheatreName = r.Show.Theatre.TheatreName,
                ShowDate = r.Date,
            });

            var sortOrder = request.SortOrder;

            switch (sortOrder)
            {
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
