using Application.Commands.SubsceneCommands;
using Application.DTO.SubsceneDto;
using Application.Queries;
using Application.Responses;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfSubsceneCommands
{
    public class EfGetSubscenesCommand : EfBaseCommand, IGetSubscenesCommand
    {
        public EfGetSubscenesCommand(EfContext context) : base(context)
        {
        }

        public PagedResponses<GetSubsceneDto> Execute(SubsceneQuery request)
        {
            var subscenes = Context.Subscenes
                .Include(s => s.SubsceneCategory)
                .Include(s => s.Scene)
                .ThenInclude(s => s.Theatre)
                .AsQueryable();

            if (request.SubsceneCategoryName != null)
                subscenes = subscenes.Where(s => s.SubsceneCategory.SubsceneCategoryName.ToLower()
                    .Contains(request.SubsceneCategoryName.ToLower()));

            if(request.SearchQuery != null)
                subscenes = subscenes.Where(s => s.SubsceneCategory.SubsceneCategoryName.ToLower()
                    .Contains(request.SearchQuery.ToLower()));

            //Sorting logic
            var sortOrder = request.SortOrder;

            switch (sortOrder)
            {
                case "sceneName_desc":
                    subscenes = subscenes.OrderByDescending(s => s.Scene.SceneName);
                    break;
                case "sceneName_asc":
                    subscenes = subscenes.OrderBy(s => s.Scene.SceneName);
                    break;
                case "seatCapacity_desc":
                    subscenes = subscenes.OrderByDescending(s => s.SeatCapacity);
                    break;
                case "seatCapacity_asc":
                    subscenes = subscenes.OrderBy(s => s.SeatCapacity);
                    break;
                case "subsceneCategoryName_desc":
                    subscenes = subscenes.OrderByDescending(s => s.SubsceneCategory.SubsceneCategoryName);
                    break;
                case "subsceneCategoryName_asc":
                    subscenes = subscenes.OrderBy(s => s.SubsceneCategory.SubsceneCategoryName);
                    break;
                case "rowsTotalNumber_desc":
                    subscenes = subscenes.OrderByDescending(s => s.RowsTotalNumber);
                    break;
                case "rowsTotalNumber_asc":
                    subscenes = subscenes.OrderBy(s => s.RowsTotalNumber);
                    break;
                default:
                    subscenes = subscenes.OrderBy(s => s.Scene.SceneName);
                    break;
            }

            var data = subscenes.Select(s => new GetSubsceneDto
            {
                Id = s.Id,
                TheatreName = s.Scene.Theatre.TheatreName,
                SceneName = s.Scene.SceneName,
                SubsceneCategoryName = s.SubsceneCategory.SubsceneCategoryName,
                RowsTotalNumber = s.RowsTotalNumber,
                SeatCapacity = s.SeatCapacity
            });

            var totalCount = data.Count();

            data = data.Skip((request.PageNumber - 1) * request.PerPage).Take(request.PerPage);
            var pagesCount = (int)Math.Ceiling((double)totalCount / request.PerPage);

            return new PagedResponses<GetSubsceneDto>
            {
                Data = data,
                PageNumber = request.PageNumber,
                PagesCount = pagesCount,
                TotalCount = totalCount
            };

        }
    }
}
