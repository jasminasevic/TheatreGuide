﻿using Application.DTO.CategoryDto;
using EfDataAccess;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Application.Validators.CategoryValidators
{
    public class CategoryValidator : AbstractValidator<CategoryDto>
    {
        public CategoryValidator(EfContext context)
        {
            RuleFor(x => x.CategoryName)
                .NotEmpty()
                .WithMessage("Category is required")
                .Must(x => !context.Categories.Any(category => category.CategoryName == x))
                .WithMessage("Category with this name already exists")
                .Length(2,30)
                .WithMessage("Category length must be 2 to 30 characters");
        }
    }
}