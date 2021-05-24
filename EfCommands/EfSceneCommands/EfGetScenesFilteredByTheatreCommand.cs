using Application.Commands.SceneCommands;
using Application.DTO.SceneDto;
using Application.Interfaces;
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
    public class EfGetScenesFilteredByTheatreCommand : EfBaseCommand, IGetScenesFilteredByTheatreCommand
    {
        public EfGetScenesFilteredByTheatreCommand(EfContext context) : base(context)
        {
        }

        public int Id => 89;

        public string Name => "Get All Scenes in Theatre Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Theatre };

        public bool ContainsSensitiveData => false;

        public PagedResponses<GetScenesBasicDto> Execute(SceneQuery request)
        {
            var scenes = Context.Scenes
                .Where(s => s.TheatreId == Convert.ToInt32(request.TheatreId))
                .AsQueryable();

            //Filtering logic
            if (request.SceneName != null)
                scenes = scenes.Where(s => s.SceneName.ToLower()
                .Contains(request.SceneName.ToLower()));

            if (request.SearchQuery != null)
                scenes = scenes.Where(s => s.SceneName.ToLower()
                .Contains(request.SearchQuery.ToLower()));

            var data = scenes.Select(s => new GetScenesBasicDto
            {
                Id = s.Id,
                SceneName = s.SceneName
            });

            // Sorting logic
            var sortOrder = request.SortOrder;

            switch (sortOrder)
            {
                case "name_desc":
                    data = data.OrderByDescending(s => s.SceneName);
                    break;
                case "name_asc":
                    data = data.OrderBy(s => s.SceneName);
                    break;
                default:
                    data = data.OrderBy(s => s.SceneName);
                    break;
            }

            var totalCount = data.Count();

            data = data.Skip((request.PageNumber - 1) * request.PerPage).Take(request.PerPage);
            var pagesCount = (int)Math.Ceiling((double)totalCount / request.PerPage);

            return new PagedResponses<GetScenesBasicDto>
            {
                PageNumber = request.PageNumber,
                PagesCount = pagesCount,
                TotalCount = totalCount,
                Data = data
            };
        }
    }
}
