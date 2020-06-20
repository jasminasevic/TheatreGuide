using Application.Commands.SceneCommands;
using Application.DTO.SceneDto;
using Application.DTO.SubsceneDto;
using Application.Queries;
using Application.Responses;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfSceneCommands
{
    public class EfGetScenesCommand : EfBaseCommand, IGetScenesCommand
    {
        public EfGetScenesCommand(EfContext context) : base(context)
        {
        }

        public PagedResponses<GetSceneDto> Execute(SceneQuery request)
        {

            var scenes = Context.Scenes
                .Include(s => s.Theatre)
                .Include(ss => ss.Subscenes)
                .ThenInclude(ss => ss.SubsceneCategory)
                .AsQueryable();


            //Filtering logic
            if (request.SceneName != null)
                scenes = scenes.Where(s => s.SceneName.ToLower()
                    .Contains(request.SceneName.ToLower()));

            if (request.TheatreName != null)
                scenes = scenes.Where(s => s.Theatre.TheatreName.ToLower()
                    .Contains(request.TheatreName.ToLower()));
                   
            if (request.SearchQuery != null)
                scenes = Context.Scenes.Where(s => s.SceneName.ToLower()
                    .Contains(request.SearchQuery.ToLower())
                || s.Theatre.TheatreName.ToLower()
                .Contains(request.TheatreName.ToLower()));

            var data = scenes.Select(s => new GetSceneDto
            {
                Id = s.Id,
                SceneName = s.SceneName,
                TheatreName = s.Theatre.TheatreName,
                GetSubsceneDtos = s.Subscenes.Select(ss => new GetSubsceneDto
                {
                    Id = ss.Id,
                    SubsceneCategoryName = ss.SubsceneCategory.SubsceneCategoryName,
                    RowsTotalNumber = ss.RowsTotalNumber,
                    SeatCapacity = ss.SeatCapacity
                })
            });

            var sortOrder = request.SortOrder;

            switch (sortOrder)
            {
                case ("sceneName_desc"):
                    data = data.OrderByDescending(s => s.SceneName);
                    break;
                case ("sceneName_asc"):
                    data = data.OrderBy(s => s.SceneName);
                    break;
                default:
                    data = data.OrderBy(s => s.SceneName);
                    break;
            }

            var totalCount = data.Count();

            data = data.Skip((request.PageNumber - 1) * request.PerPage).Take(request.PerPage);
            var pagesCount = (int)Math.Ceiling((double)totalCount / request.PerPage);

            return new PagedResponses<GetSceneDto>
            {
                Data = data,
                PageNumber = request.PageNumber,
                PagesCount = pagesCount,
                TotalCount = totalCount
            };
        }
    }
}
