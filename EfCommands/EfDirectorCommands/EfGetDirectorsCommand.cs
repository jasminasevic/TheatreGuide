using Application.Commands.DirectorCommands;
using Application.DTO.DirectorDto;
using Application.DTO.ShowDto;
using Application.Queries;
using Application.Responses;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfDirectorCommands
{
    public class EfGetDirectorsCommand : EfBaseCommand, IGetDirectorsCommand
    {
        public EfGetDirectorsCommand(EfContext context) : base(context)
        {
        }

        public PagedResponses<GetDirectorDto> Execute(DirectorQuery request)
        {
            var directors = Context.Directors
                .Include(d => d.Shows)
                .AsQueryable();

            //Filtering logic
            if(request.DirectorFirstName != null)
                directors = directors.Where(d => d.DirectorFirstName.ToLower()
                .Contains(request.DirectorFirstName.ToLower()));

            if (request.DirectorLastName != null)
                directors = directors.Where(d => d.DirectorLastName.ToLower()
                .Contains(request.DirectorLastName.ToLower()));

            //Filtering logic
            if (!string.IsNullOrEmpty(request.SearchQuery))
                directors = directors.Where(d => d.DirectorFirstName.ToLower()
                .Contains(request.SearchQuery.ToLower()) ||
                d.DirectorLastName.ToLower()
                .Contains(request.SearchQuery.ToLower()));


            var data = directors.Select(d => new GetDirectorDto
            {
                Id = d.Id,
                DirectorFirstName = d.DirectorFirstName,
                DirectorLastName = d.DirectorLastName,
                DirectorBiography = d.DirectorBiography,
                showBaseInfoDtos = d.Shows.Select(s => new ShowBaseInfoDto
                {
                    Id = s.Id,
                    Title = s.Title,
                    CategoryName = s.Category.CategoryName
                })
            });

            //Sorting logic
            var sortOrder = request.SortOrder;

            switch (sortOrder)
            {
                case "directorFirstName_desc":
                    directors = directors.OrderByDescending(d => d.DirectorFirstName);
                    break;
                case "directorFirstName_asc":
                    directors = directors.OrderBy(d => d.DirectorFirstName);
                    break;
                case "directorLastName_desc":
                    directors = directors.OrderByDescending(d => d.DirectorLastName);
                    break;
                case "directorLastName_asc":
                    directors = directors.OrderBy(d => d.DirectorLastName);
                    break;
                default:
                    directors = directors.OrderBy(d => d.DirectorFirstName);
                    break;
            }

            var totalCount = directors.Count();

            data = data.Skip((request.PageNumber - 1)* request.PerPage).Take(request.PerPage);
            var pagesCount = (int)Math.Ceiling((double)totalCount / request.PerPage);

            return new PagedResponses<GetDirectorDto>
            {
                PageNumber = request.PageNumber,
                PagesCount = pagesCount,
                TotalCount = totalCount,
                Data = data
            };

        }
    }
}
