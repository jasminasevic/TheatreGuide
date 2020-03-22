using Application.Commands.CategoryCommands;
using Application.DTO.CategoryDto;
using Application.Queries;
using Application.Responses;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfCategoryCommands
{
    public class EfGetCategoriesCommand : EfBaseCommand, IGetCategoriesCommand
    {
        public EfGetCategoriesCommand(EfContext context) : base(context)
        {
        }

        public PagedResponses<ShowCategoryDto> Execute(CategoryQuery request)
        {
            var categories = Context.Categories
                .AsQueryable();

            if (request.CategoryName != null)
                categories = categories.Where(c => c.CategoryName.ToLower()
                .Contains(request.CategoryName.ToLower()));

            var data = categories.Select(c => new ShowCategoryDto
            {
                Id = c.Id,
                CategoryName = c.CategoryName
            });

            //Sorting logic
            var sortOrder = request.SortOrder;

            switch (sortOrder)
            {
                case "category_desc":
                    data = data.OrderByDescending(c => c.CategoryName);
                    break;
                case "category_asc":
                    data = data.OrderBy(c => c.CategoryName);
                    break;
                default:
                    data = data.OrderBy(c => c.CategoryName);
                    break;
            }

            var totalCount = data.Count();

            //Filtering logic
            if(!string.IsNullOrEmpty(request.SearchString))
            {
                data = data.Where(c => c.CategoryName.ToLower()
                .Contains(request.CategoryName.ToLower()));
                totalCount = data.Count();
            }

            data = data.Skip((request.PageNumber - 1) * request.PerPage).Take(request.PerPage);
            var pagesCount = (int)Math.Ceiling((double)totalCount / request.PerPage);

            return new PagedResponses<ShowCategoryDto>
            {
                PageNumber = request.PageNumber,
                PagesCount = pagesCount,
                TotalCount = totalCount,
                Data = data
            };
        }
    }
}
