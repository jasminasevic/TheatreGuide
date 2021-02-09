using Application.DTO.DirectorDto;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Validators.DirectorValidators
{
    public class DirectorValidator : AbstractValidator<DirectorDto>
    {
        public DirectorValidator()
        {
            RuleFor(x => x.DirectorFirstName)
                .NotEmpty()
                .WithMessage("Director first name is required")
                .Length(2, 30)
                .WithMessage("Name length must be 2 to 30 characters");
               

            RuleFor(x => x.DirectorLastName)
                .NotEmpty()
                .WithMessage("Director last name is required")
                .Length(2, 30)
                .WithMessage("Last name length must be 2 to 30 characters");

            RuleFor(x => x.DirectorBiography)
                .NotEmpty()
                .WithMessage("Director biography is required");
        }
    }
}
