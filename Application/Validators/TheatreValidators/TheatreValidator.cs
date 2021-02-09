using Application.DTO.TheatreDto;
using EfDataAccess;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Application.Validators.TheatreValidators
{
    public class TheatreValidator : AbstractValidator<TheatreDto>
    {
        public TheatreValidator(EfContext context)
        {
            RuleFor(x => x.Name)
                .NotEmpty()
                .WithMessage("Theatre name is required");

            RuleFor(x => x.Description)
                .NotEmpty()
                .WithMessage("Description is required");

            RuleFor(x => x.Email)
                .NotEmpty()
                .WithMessage("Email is required")
                .EmailAddress()
                .WithMessage("Wrong email format");

            RuleFor(x => x.Location)
                .NotEmpty()
                .WithMessage("Location is required");
        }
    }
}
