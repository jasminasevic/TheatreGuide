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
    public class EfEditCategoryCommand : EfBaseCommand, IEditCategoryCommand
    {
        public EfEditCategoryCommand(EfContext context) : base(context)
        {
        }

        public int Id => 9;

        public string Name => "Edit Category Using EF";

        public void Execute(CategoryDto request)
        {
            var category = Context.Categories.Find(request.Id);

            if (category == null)
                throw new EntityNotFoundException(request.ToString());

            if (request.CategoryName != category.CategoryName
                && Context.Categories.Any(c => c.CategoryName == request.CategoryName))
                throw new EntityAlreadyExistsException(request.ToString());

            category.CategoryName = request.CategoryName;

            Context.SaveChanges();
        }
    }
}
