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
                .MaximumLength(30)
                .WithMessage("Actor name is required");

            RuleFor(x => x.ActorLastName)
                .NotEmpty()
                .MaximumLength(30)
                .WithMessage("Actor last name is required");

            RuleFor(x => x.ActorBiography)
                .NotEmpty()
                .WithMessage("Actor biography is required");
        }
    }
}
