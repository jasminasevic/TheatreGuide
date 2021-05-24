using Application.Commands.CategoryCommands;
using Application.DTO.CategoryDto;
using Application.Exceptions;
using Application.Interfaces;
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

        public IEnumerable<Role> Roles => new List<Role>() { Role.Anonymus, Role.Admin, Role.Theatre, Role.User };

        public bool ContainsSensitiveData => false;

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
