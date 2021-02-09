using Application.Commands.CategoryCommands;
using Application.DTO.CategoryDto;
using Application.Exceptions;
using Application.Interfaces;
using Application.Validators.CategoryValidators;
using EfDataAccess;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfCategoryCommands
{
    public class EfAddCategoryCommand : EfBaseCommand, IAddCategoryCommand
    {
        private readonly CategoryValidator _validator;
        public EfAddCategoryCommand(EfContext context, CategoryValidator validator) 
            : base(context)
        {
            _validator = validator;
        }

        public int Id => 7;

        public string Name => "Add New Category Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin };

        public void Execute(CategoryDto request)
        {
            _validator.ValidateAndThrow(request);
            //If there is an exception it will catch ValidationException in GlobalExceptionHandler

            Context.Categories.Add(new Domain.Category
            {
                CategoryName = request.CategoryName
            });

            Context.SaveChanges();
        }
    }
}
