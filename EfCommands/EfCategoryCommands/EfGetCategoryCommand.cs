using Application.Commands.CategoryCommands;
using Application.DTO.CategoryDto;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfCategoryCommands
{
    public class EfGetCategoryCommand : EfBaseCommand, IGetCategoryCommand
    {
        public EfGetCategoryCommand(EfContext context) : base(context)
        {
        }

        public int Id => 12;

        public string Name => "Get Category Command Using EF";


        public CategoryDto Execute(int request)
        {
            var category = Context.Categories
                .Where(r => r.Id == request)
                .FirstOrDefault();

            if (category == null)
                throw new EntityNotFoundException(request.ToString());

            return new CategoryDto
            {
                Id = category.Id,
                CategoryName = category.CategoryName
            };
        }
    }
}
