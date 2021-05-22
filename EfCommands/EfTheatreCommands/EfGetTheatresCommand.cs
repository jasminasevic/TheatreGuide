using Application.Commands.TheatreCommands;
using Application.DTO.ImageDto;
using Application.DTO.ShowDto;
using Application.DTO.TheatreDto;
using Application.Interfaces;
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

        public int Id => 72;

        public string Name => "Get Theatres Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Anonymus, Role.Admin, Role.Theatre, Role.User };

        public PagedResponses<GetTheatreDto> Execute(TheatreQuery request)
        {
            var theatre = Context.Theatres
                .Include(t => t.TheatreImages)
                //.Include(t => t.Shows)
                //.ThenInclude(s => s.Category)
                //.Where(t => t.IsVisible == true)
                .AsQueryable();

            if(request.Type == "visible")
            {
                theatre = theatre.Where(t => t.IsVisible == true)
                    .AsQueryable();
            }

            //Filtering logic
            if (request.Name != null)
                theatre = theatre.Where(t => t.TheatreName.ToLower()
                .Contains(request.Name.ToLower()));

            if (request.Email != null)
                theatre = theatre.Where(t => t.ContactEmail.ToLower()
                .Contains(request.Email.ToLower()));

            if (request.SearchQuery != null)
                theatre = theatre.Where(t => t.TheatreName.ToLower()
                .Contains(request.SearchQuery.ToLower()));

            var data = theatre.Select(t => new GetTheatreDto
            {
                Id = t.Id,
                Name = t.TheatreName,
                Description = t.TheatreDescription,
                Email = t.ContactEmail,
                WorkingHours = t.WorkingHours,
                Telephone = t.ContactTelephone,
                Location = t.Location,
                Latitude = t.Latitude,
                Longitude = t.Longitude,
                IsVisible = t.IsVisible,
                ShowImageDtos = t.TheatreImages.Select(i => new GetImageDto
                {
                    Id = i.Id,
                    Alt = i.TheatreImageAlt,
                    Path = "/uploads/theatre-images/" + i.TheatreImagePath
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
                case "isVisible_desc":
                    data = data.OrderByDescending(t => t.IsVisible);
                    break;
                case "isVisible_asc":
                    data = data.OrderBy(t => t.IsVisible);
                    break;
                default:
                    data = data.OrderBy(t => t.Name);
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
