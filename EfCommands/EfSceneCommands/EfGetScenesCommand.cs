using Application.Commands.SceneCommands;
using Application.DTO.SceneDto;
using Application.DTO.SectorDto;
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
                .Include(ss => ss.Sectors)
                .AsQueryable();


            //Filtering logic
            if (request.SceneName != null)
                scenes = scenes.Where(s => s.SceneName.ToLower()
                    .Contains(request.SceneName.ToLower()));

            if (request.TheatreName != null)
                scenes = scenes.Where(s => s.Theatre.TheatreName.ToLower()
                    .Contains(request.TheatreName.ToLower()));
                   
            if (request.SearchQuery != null)
                scenes = scenes.Where(s => s.SceneName.ToLower()
                    .Contains(request.SearchQuery.ToLower())
                || s.Theatre.TheatreName.ToLower()
                .Contains(request.SearchQuery.ToLower()));

            var data = scenes.Select(s => new GetSceneDto
            {
                Id = s.Id,
                SceneName = s.SceneName,
                TheatreName = s.Theatre.TheatreName,
                GetSectorDtos = s.Sectors.Select(ss => new GetSectorDto
                {
                    Id = ss.Id,
                    SectorName = ss.SectorName,
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
                case ("theatreName_desc"):
                    data = data.OrderBy(t => t.TheatreName);
                    break;
                case ("theatreName_asc"):
                    data = data.OrderByDescending(t => t.TheatreName);
                    break;
                default:
                    data = data.OrderBy(t => t.TheatreName);
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
