using Application.Commands.ShowFollowerCommands;
using Application.DTO.ImageDto;
using Application.DTO.ShowDto;
using Application.DTO.ShowFollowerDto;
using Application.Interfaces;
using Application.Queries;
using Application.Responses;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfShowFollowerCommands
{
    public class EfGetFollowedShowsFilteredByUserCommand : EfBaseCommand, IGetFollowedShowsFilteredByUserCommand
    {
        public EfGetFollowedShowsFilteredByUserCommand(EfContext context) : base(context)
        {
        }

        public int Id => 102;

        public string Name => "Get Followed Shows Filtered by User Using EF";

        public IEnumerable<Role> Roles => new List<Role> { Role.User };

        public PagedResponses<GetFollowedShowsDto> Execute(ShowQuery query)
        {
            var followedShows = Context.ShowFollowers
                .Include(s => s.Show)
                .ThenInclude(s => s.Theatre)
                .Include(s => s.Show)
                .ThenInclude(s => s.ShowImages)
                .AsQueryable();

            followedShows = followedShows.Where(s => s.UserId.ToString() == query.UserId);

            //Filtering logic
            if (query.Title != null)
                followedShows = followedShows.Where(s => s.Show.Title.ToLower()
                .Contains(query.Title.ToLower()));

            if (query.SearchQuery != null)
                followedShows = followedShows.Where(s => s.Show.Title.ToLower()
                .Contains(query.SearchQuery.ToLower()));

            var data = followedShows.Select(s => new GetFollowedShowsDto
            {
                Id = s.Show.Id,
                Title = s.Show.Title,
                Theatre = s.Show.Theatre.TheatreName,
                TheatreId = s.Show.TheatreId,
                ShowImageDtos = s.Show.ShowImages.Select(i => new GetImageDto
                {
                    Id = i.Id,
                    Alt = i.ShowImageAlt,
                    Path = "uploads/show-images/" + i.ShowImagePath
                }).Take(1)
            });

            //Sorting Logic
            var sortOrder = query.SortOrder;

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

            var datas = data.Skip((query.PageNumber - 1) * query.PerPage).Take(query.PerPage);
            var pagesCount = (int)Math.Ceiling((double)totalCount / query.PerPage);

            return new PagedResponses<GetFollowedShowsDto>
            {
                PageNumber = query.PageNumber,
                PagesCount = pagesCount,
                TotalCount = totalCount,
                Data = datas
            };
        }
    }
}
