using Application.Commands.SubsceneCategoryCommands;
using Application.DTO.SubsceneCategoryDto;
using Application.Exceptions;
using Application.Queries;
using Application.Responses;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfSubsceneCategoryCommands
{
    public class EfGetSubsceneCategoriesCommand : EfBaseCommand, IGetSubsceneCategoriesCommand
    {
        public EfGetSubsceneCategoriesCommand(EfContext context) : base(context)
        {
        }

        public PagedResponses<GetSubsceneCategoryDto> Execute(SubsceneCategoryQuery request)
        {
            var subsceneCategories = Context.SubsceneCategories
                .AsQueryable();

            if (request.SubsceneCategoryName != null)
                subsceneCategories = subsceneCategories.Where(s => s.SubsceneCategoryName.ToLower()
                == request.SubsceneCategoryName.ToLower());

            if(request.SearchQuery !=null)
                subsceneCategories = subsceneCategories.Where(s => s.SubsceneCategoryName.ToLower()
                == request.SearchQuery.ToLower());

            var data = subsceneCategories.Select(s => new GetSubsceneCategoryDto
            {
                Id = s.Id,
                SubsceneCategoryName = s.SubsceneCategoryName
            });

            //Sorting logic
            var sortOrder = request.SortOrder;

            switch (sortOrder)
            {
                case "subsceneCategoryName_desc":
                    data = data.OrderByDescending(s => s.SubsceneCategoryName);
                    break;
                case "subsceneCategoryName_asc":
                    data = data.OrderBy(s => s.SubsceneCategoryName);
                    break;
                default:
                    data = data.OrderBy(s => s.SubsceneCategoryName);
                    break;
            }

            var totalCount = data.Count();

            data = data.Skip((request.PageNumber - 1) * request.PerPage).Take(request.PerPage);
            var pagesCount = (int)Math.Ceiling((double)totalCount / request.PerPage);

            return new PagedResponses<GetSubsceneCategoryDto>
            {
                PageNumber = request.PageNumber,
                PagesCount = pagesCount,
                TotalCount = totalCount,
                Data = data
            };
        }
    }
}
