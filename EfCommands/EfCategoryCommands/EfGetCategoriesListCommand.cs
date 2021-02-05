using Application.Commands.CategoryCommands;
using Application.DTO.CategoryDto;
using Application.Interfaces;
using Application.Queries;
using Application.Responses;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfCategoryCommands
{
    public class EfGetCategoriesListCommand : EfBaseCommand, IGetCategoriesListCommand
    {
        public EfGetCategoriesListCommand(EfContext context) : base(context)
        {
        }

        public int Id => 11;

        public string Name => "Get Category List Using EF";


        public IEnumerable<CategoryBasicDto> Execute(SearchQuery request)
        {
            var categories = Context.Categories
                .AsQueryable();

            var data = categories.Select(c => new CategoryBasicDto
            {
                Id = c.Id,
                CategoryName = c.CategoryName
            });

            data = data.OrderBy(c => c.CategoryName);

            return data;
        }
    }
}
