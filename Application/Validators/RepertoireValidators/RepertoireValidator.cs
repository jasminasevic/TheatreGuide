using Application.DTO.RepertoireDto;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Validators.RepertoireValidators
{
    public class RepertoireValidator : AbstractValidator<RepertoireDto>
    {
        public RepertoireValidator()
        {
            RuleFor(x => x.ShowId)
                .NotEmpty()
                .WithMessage("Show is required");

            RuleFor(x => x.TheatreId)
                .NotEmpty()
                .WithMessage("Theatre is required");

            RuleFor(x => x.ShowDate)
                .NotEmpty()
                .WithMessage("Show date and time are required");
        }
    }
}
