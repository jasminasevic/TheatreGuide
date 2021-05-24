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
    public class EfEditCategoryCommand : EfBaseCommand, IEditCategoryCommand
    {
        private readonly CategoryValidator _validator;
        public EfEditCategoryCommand(EfContext context, CategoryValidator validator) 
            : base(context)
        {
            _validator = validator;
        }

        public int Id => 9;

        public string Name => "Edit Category Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin };

        public bool ContainsSensitiveData => false;

        public void Execute(CategoryDto request)
        {
            _validator.ValidateAndThrow(request);

            var category = Context.Categories.Find(request.Id);

            if (category == null)
                throw new EntityNotFoundException(request.ToString());

            category.CategoryName = request.CategoryName;

            Context.SaveChanges();
        }
    }
}
