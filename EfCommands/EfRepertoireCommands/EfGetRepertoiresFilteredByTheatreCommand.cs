using Application.Commands.RepertoireCommands;
using Application.DTO.RepertoireDto;
using Application.Interfaces;
using Application.Queries;
using Application.Responses;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfRepertoireCommands
{
    public class EfGetRepertoiresFilteredByTheatreCommand : EfBaseCommand, IGetRepertoiresFilteredByTheatreCommand
    {
        public EfGetRepertoiresFilteredByTheatreCommand(EfContext context) : base(context)
        {
        }

        public int Id => 91;

        public string Name => "Get Repertoires Filtered By Theatre Using EF";

        public IEnumerable<Role> Roles => new List<Role> { Role.Theatre };

        public bool ContainsSensitiveData => false;

        public PagedResponses<GetRepertoireBaseInfoDto> Execute(RepertoireQuery request)
        {
            var repertoires = Context.Repertoires
                .Include(t => t.Theatre)
                .Include(s => s.Show)
                .ThenInclude(s => s.Scene)
                .Where(s => s.TheatreId == request.TheatreId)
                .AsQueryable();

             //Filtering logic

            if (request.SceneName != null)
                repertoires = repertoires.Where(r => r.Show.Scene.SceneName.ToLower()
                .Contains(request.SceneName.ToLower()));

            if (request.ShowTitle != null)
                repertoires = repertoires.Where(r => r.Show.Title.ToLower()
                .Contains(request.ShowTitle.ToLower()));

            if(request.SearchQuery != null)
                repertoires = repertoires.Where(r => r.Show.Scene.SceneName.ToLower()
               .Contains(request.SearchQuery.ToLower())
               || r.Show.Title.ToLower()
               .Contains(request.SearchQuery.ToLower()));

            var data = repertoires.Select(r => new GetRepertoireBaseInfoDto
            {
                Id = r.Id,
                ShowId = r.ShowId,
                ShowName = r.Show.Title,
                SceneId = r.Show.SceneId,
                SceneName = r.Show.Scene.SceneName,
                ShowDate = r.Date,
                IsPremiere = r.IsPremiere,
                TheatreId = r.TheatreId
            });

            if (request.PastShows == "false")
            {
                data = data.Where(s => s.ShowDate > DateTime.Now);
            }

            var sortOrder = request.SortOrder;

            switch (sortOrder)
            {
                case "name_desc":
                    data = data.OrderByDescending(r => r.ShowName);
                    break;
                case "name_asc":
                    data = data.OrderBy(r => r.ShowName);
                    break;
                case "show_desc":
                    data = data.OrderByDescending(r => r.ShowName);
                    break;
                case "show_asc":
                    data = data.OrderBy(r => r.ShowName);
                    break;
                case "date_desc":
                    data = data.OrderByDescending(r => r.ShowDate);
                    break;
                case "date_asc":
                    data = data.OrderBy(r => r.ShowDate);
                    break;
                case "isPremiere_desc":
                    data = data.OrderByDescending(r => r.IsPremiere);
                    break;
                case "isPremiere_asc":
                    data = data.OrderBy(r => r.IsPremiere);
                    break;
                default:
                    data = data.OrderBy(r => r.ShowDate);
                    break;
            }

            var totalCount = data.Count();

            data = data.Skip((request.PageNumber - 1) * request.PerPage).Take(request.PerPage);
            var pagesCount = (int)Math.Ceiling((double)totalCount / request.PerPage);

            return new PagedResponses<GetRepertoireBaseInfoDto>
            {
                PageNumber = request.PageNumber,
                PagesCount = pagesCount,
                TotalCount = totalCount,
                Data = data
            };
        }
    }
}
