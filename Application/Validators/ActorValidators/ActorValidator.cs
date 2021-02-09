using Application.DTO.ActorDto;
using EfDataAccess;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Application.Validators.ActorValidators
{
    public class ActorValidator : AbstractValidator<ActorDto>
    {
        public ActorValidator(EfContext context)
        {
            RuleFor(x => x.ActorFirstName)
                .NotEmpty()
                .WithMessage("First name is required")
                .Length(2, 30)
                .WithMessage("First name must be 2 to 30 characters");

            RuleFor(x => x.ActorLastName)
                .NotEmpty()
                .WithMessage("Last name is required")
                .Length(2, 30)
                .WithMessage("Last name must be 2 to 30 characters");

            RuleFor(x => x.ActorBiography)
                .NotEmpty()
                .WithMessage("Actor biography is required");
        }
    }
}
