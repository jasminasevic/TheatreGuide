using Application.Commands.TheatreCommands;
using Application.DTO.ImageDto;
using Application.DTO.ShowDto;
using Application.DTO.TheatreDto;
using Application.Queries;
using Application.Responses;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfTheatreCommands
{
    public class EfGetTheatresCommand : EfBaseCommand, IGetTheatresCommand
    {
        public EfGetTheatresCommand(EfContext context) : base(context)
        {
        }

        public PagedResponses<GetTheatreDto> Execute(TheatreQuery request)
        {
            var theatre = Context.Theatres
                .Include(t => t.Address)
                .Include(t => t.TheatreImages)
                .Include(t => t.Shows)
                .ThenInclude(s => s.Category)
                .AsQueryable();

            //Filtering logic
            if (request.Name != null)
                theatre = theatre.Where(t => t.TheatreName.ToLower()
                .Contains(request.Name.ToLower()));

            if (request.Email != null)
                theatre = theatre.Where(t => t.ContactEmail.ToLower()
                .Contains(request.Email.ToLower()));

            if (request.SearchQuery != null)
                theatre = theatre.Where(t => t.TheatreName.ToLower()
                .Contains(request.SearchQuery.ToLower())
                || t.ContactEmail.ToLower()
                .Contains(request.SearchQuery.ToLower())
                || t.Shows.Any(s => s.Title.ToLower()
                .Contains(request.SearchQuery.ToLower())));

            var data = theatre.Select(t => new GetTheatreDto
            {
                Id = t.Id,
                Name = t.TheatreName,
                Description = t.TheatreDescription,
                Email = t.ContactEmail,
                WorkingHours = t.WorkingHours,
                Telephone = t.ContactTelephone,
                Location = t.Address.Location,
                Latitude = t.Address.Latitude,
                Longitude = t.Address.Longitude,
                ShowImageDtos = t.TheatreImages.Select(i => new GetImageDto
                {
                    Id = i.Id,
                    Alt = i.TheatreImageAlt,
                    Path = i.TheatreImagePath
                }),
                ShowBaseInfoDtos = t.Shows.Select(s => new ShowBaseInfoDto
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
                case "name_desc":
                    data = data.OrderByDescending(t => t.Name);
                    break;
                case "name_asc":
                    data = data.OrderBy(t => t.Name);
                    break;
                case "email_desc":
                    data = data.OrderByDescending(t => t.Email);
                    break;
                case "email_asc":
                    data = data.OrderBy(t => t.Email);
                    break;
                default:
                    data = data.OrderBy(t => t.Email);
                    break;
            };

            var totalCount = data.Count();

            data = data.Skip((request.PageNumber - 1) * request.PerPage).Take(request.PerPage);
            var pagesCount = (int)Math.Ceiling((double)totalCount / request.PerPage);

            return new PagedResponses<GetTheatreDto>
            {
                PageNumber = request.PageNumber,
                PagesCount = pagesCount,
                TotalCount = totalCount,
                Data = data
            };

        }
    }
}
