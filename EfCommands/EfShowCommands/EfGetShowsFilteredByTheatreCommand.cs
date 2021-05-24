using Application.Commands.ShowCommands;
using Application.DTO.ImageDto;
using Application.DTO.ShowDto;
using Application.Interfaces;
using Application.Queries;
using Application.Responses;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfShowCommands
{
    public class EfGetShowsFilteredByTheatreCommand : EfBaseCommand, IGetShowsFilteredByTheatreCommand
    {
        public EfGetShowsFilteredByTheatreCommand(EfContext context) : base(context)
        {
        }

        public int Id => 88;

        public string Name => "Get Shows Filtered by Theatre Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Theatre };

        public bool ContainsSensitiveData => false;

        public PagedResponses<ShowBaseInfoDto> Execute(ShowQuery request)
        {
            var shows = Context.Shows
                .Include(s => s.ShowImages)
                .Include(s => s.Category)
                .Where(s => s.TheatreId == Convert.ToInt32(request.TheatreId))
                .AsQueryable();

            //Filtering logic
            if (request.Title != null)
                shows = shows.Where(s => s.Title.ToLower()
                .Contains(request.Title.ToLower()));

            if (request.SearchQuery != null)
                shows = shows.Where(s => s.Title.ToLower()
                .Contains(request.SearchQuery.ToLower()));


            var data = shows.Select(s => new ShowBaseInfoDto
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
            });

            // Sorting logic
            var sortOrder = request.SortOrder;

            switch (sortOrder)
            {
                case "name_desc":
                    data = data.OrderByDescending(s => s.Title);
                    break;
                case "name_asc":
                    data = data.OrderBy(s => s.Title);
                    break;
                default:
                    data = data.OrderBy(s => s.Title);
                    break;
            }

            var totalCount = data.Count();

            data = data.Skip((request.PageNumber - 1) * request.PerPage).Take(request.PerPage);
            var pagesCount = (int)Math.Ceiling((double)totalCount / request.PerPage);

            return new PagedResponses<ShowBaseInfoDto>
            {
                PageNumber = request.PageNumber,
                PagesCount = pagesCount,
                TotalCount = totalCount,
                Data = data
            };
        }
    }
}
