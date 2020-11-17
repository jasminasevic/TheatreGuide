using Application.Commands.ShowCommands;
using Application.DTO.ActorDto;
using Application.DTO.ImageDto;
using Application.DTO.PriceDto;
using Application.DTO.ShowDto;
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
    public class EfGetShowsCommand : EfBaseCommand, IGetShowsCommand
    {
        public EfGetShowsCommand(EfContext context) : base(context)
        {
        }

        public PagedResponses<GetShowDto> Execute(ShowQuery request)
        {
            var shows = Context.Shows
                .Include(s => s.ShowImages)
                .Include(s => s.Category)
                .Include(s => s.Writer)
                .Include(s => s.Director)
                .Include(s => s.Theatre)
                .Include(s => s.Scene)
                .Include(s => s.Prices)
                .ThenInclude(s => s.Sector)
                .Include(s => s.ActorShows)
                .ThenInclude(s => s.Actor)
                .Include(s => s.ShowFollowers)
                .AsQueryable();

            //Filtering logic
            if (request.Title != null)
                shows = shows.Where(s => s.Title.ToLower()
                .Contains(request.Title.ToLower()));

            if(request.SearchQuery != null)
                shows = shows.Where(s => s.Title.ToLower()
                .Contains(request.SearchQuery.ToLower()));

            var data = shows.Select(s => new GetShowDto
            {
                Id = s.Id,
                Title = s.Title,
                Category = s.Category.CategoryName,
                Writer = s.Writer,
                DirectorFirstName = s.Director.DirectorFirstName,
                DirectorLastName = s.Director.DirectorLastName,
                Description = s.ShowDescription,
                Duration = s.Duration,
                ContentAdvisory = s.ContentAdvisory,
                PremiereDate = s.PremiereDate,
                Theatre = s.Theatre.TheatreName,
                Scene = s.Scene.SceneName,
                FollowersNumber = s.ShowFollowers.Count(),
                ShowImageDtos = s.ShowImages.Select(i => new GetImageDto
                {
                    Id = i.Id,
                    Alt = i.ShowImageAlt,
                    Path = i.ShowImagePath
                }),
                ActorShowDtos = s.ActorShows.Select(a => new ActorShowDto
                {
                    ActorId = a.ActorId,
                    ActorFirstName = a.Actor.ActorFirstName,
                    ActorLastName = a.Actor.ActorLastName,
                    ActorRoleDescription = a.ActorRoleDescription,
                    ActorRoleName = a.ActorRoleName
                }),
                GetPriceDtos = s.Prices.Select(p => new GetPriceDto
                {
                    Price = p.TicketPrice,
                    SectorId = p.Sector.Id,
                    SectorName = p.Sector.SectorName,
                    RowsTotalNumber = p.Sector.RowsTotalNumber,
                    SeatCapacity = p.Sector.SeatCapacity
                })
            });

            //Sorting Logic
            var sortOrder = request.SortOrder;

            switch (sortOrder)
            {
                case "title_desc":
                    data = data.OrderByDescending(s => s.Title);
                    break;
                case "title_asc":
                    data = data.OrderBy(s => s.Title);
                    break;
                case "category_desc":
                    data = data.OrderByDescending(s => s.Category);
                    break;
                case "category_asc":
                    data = data.OrderBy(s => s.Category);
                    break;
                //case "writer_name_desc":
                //    data = data.OrderByDescending(s => s.WriterFirstName);
                //    break;
                //case "writer_name_asc":
                //    data = data.OrderBy(s => s.WriterFirstName);
                //    break;
                //case "writer_last_name_desc":
                //    data = data.OrderByDescending(s => s.WriterLastName);
                //    break;
                //case "writer_last_name_asc":
                //    data = data.OrderBy(s => s.WriterLastName);
                //    break;
                case "director_name_desc":
                    data = data.OrderByDescending(s => s.DirectorFirstName);
                    break;
                case "director_name_asc":
                    data = data.OrderBy(s => s.DirectorFirstName);
                    break;
                case "director_last_name_desc":
                    data = data.OrderByDescending(s => s.DirectorFirstName);
                    break;
                case "director_last_name_asc":
                    data = data.OrderBy(s => s.DirectorLastName);
                    break;
                case "theatre_desc":
                    data = data.OrderByDescending(s => s.Theatre);
                    break;
                case "theatre_asc":
                    data = data.OrderBy(s => s.Theatre);
                    break;
                case "duration_desc":
                    data = data.OrderByDescending(s => s.Duration);
                    break;
                case "duration_asc":
                    data = data.OrderBy(s => s.Duration);
                    break;
                case "contentadv_desc":
                    data = data.OrderByDescending(s => s.ContentAdvisory);
                    break;
                case "contentadv_asc":
                    data = data.OrderBy(s => s.ContentAdvisory);
                    break;
                case "premiere_desc":
                    data = data.OrderByDescending(s => s.PremiereDate);
                    break;
                case "premiere_asc":
                    data = data.OrderBy(s => s.PremiereDate);
                    break;
                case "followers_desc":
                    data = data.OrderByDescending(s => s.FollowersNumber);
                    break;
                case "followers_asc":
                    data = data.OrderBy(s => s.FollowersNumber);
                    break;
                default:
                    data = data.OrderBy(s => s.Title);
                    break;
            }

            var totalCount = data.Count();

            data = data.Skip((request.PageNumber - 1) * request.PerPage).Take(request.PerPage);
            var pagesCount = (int)Math.Ceiling((double)totalCount / request.PerPage);

            return new PagedResponses<GetShowDto>
            {
                PageNumber = request.PageNumber,
                PagesCount = pagesCount,
                TotalCount = totalCount,
                Data = data
            };
        }
    }
}
