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
    public class EfAddCategoryCommand : EfBaseCommand, IAddCategoryCommand
    {
        public EfAddCategoryCommand(EfContext context) : base(context)
        {
        }

        public void Execute(CategoryDto request)
        {
            if (Context.Categories.Any(c => c.CategoryName.ToLower() == request.CategoryName.ToLower()))
                throw new EntityAlreadyExistsException(request.CategoryName);

            Context.Categories.Add(new Domain.Category
            {
                CategoryName = request.CategoryName
            });

            Context.SaveChanges();
        }
    }
}
