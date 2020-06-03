using Application.Commands.ActorCommands;
using Application.DTO.ActorDto;
using Application.DTO.ImageDto;
using Application.Exceptions;
using Application.Queries;
using Application.Responses;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfActorCommands
{
    public class EfGetActorsCommand : EfBaseCommand, IGetActorsCommand
    {
        public EfGetActorsCommand(EfContext context) : base(context)
        {
        }

        public PagedResponses<GetActorDto> Execute(ActorQuery request)
        {
            var actors = Context.Actors
                .Include(a => a.ActorImages)
                .AsQueryable();

            //Filtering logic
            if (request.ActorFirstName != null)
                actors = actors.Where(a => a.ActorFirstName.ToLower()
                .Contains(request.ActorFirstName.ToLower()));

            if (request.ActorLastName != null)
                actors = actors.Where(a => a.ActorLastName.ToLower()
                .Contains(request.ActorLastName.ToLower()));

            if (request.SearchQuery != null)
                actors = actors.Where(a => a.ActorFirstName.ToLower()
                .Contains(request.SearchQuery.ToLower())
                || a.ActorLastName.ToLower()
                .Contains(request.SearchQuery.ToLower()));

            var data = actors.Select(a => new GetActorDto
            {
                Id = a.Id,
                ActorFirstName = a.ActorFirstName,
                ActorLastName = a.ActorLastName,
                ActorBiography = a.ActorBiography,
                ShowImageDto = a.ActorImages.Select(i => new GetImageDto
                {
                    Id = i.Id,
                    Alt = i.ActorImageAlt,
                    Path = i.ActorImagePath
                })
            });

            //Sorting Logic
            var sortOrder = request.SortOrder;

            switch (sortOrder)
            {
                case "actorFirstName_desc":
                    data = data.OrderByDescending(a => a.ActorFirstName);
                    break;
                case "actorFirstName":
                    data = data.OrderBy(a => a.ActorFirstName);
                    break;
                case "actorLastName_desc":
                    data = data.OrderByDescending(a => a.ActorLastName);
                    break;
                case "actorLastName":
                    data = data.OrderBy(a => a.ActorLastName);
                    break;
                default:
                    data = data.OrderBy(a => a.ActorFirstName);
                    break;
            }

            var totalCount = data.Count();

            data = data.Skip((request.PageNumber - 1) * request.PerPage).Take(request.PerPage);
            var pagesCount = (int)Math.Ceiling((double)totalCount / request.PerPage);

            return new PagedResponses<GetActorDto>
            {
                PageNumber = request.PageNumber,
                PagesCount = pagesCount,
                TotalCount = totalCount,
                Data = data
            };  
        }
    }
}
