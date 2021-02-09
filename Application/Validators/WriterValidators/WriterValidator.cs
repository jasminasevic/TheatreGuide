using Application.DTO.WriterDto;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Validators.WriterValidators
{
    public class WriterValidator : AbstractValidator<WriterDto>
    {
        public WriterValidator()
        {
            RuleFor(x => x.WriterFirstName)
                .NotEmpty()
                .WithMessage("Writer name is required");

            RuleFor(x => x.WriterLastName)
                .NotEmpty()
                .WithMessage("Writer last name is required");

            RuleFor(x => x.WriterBiography)
                .NotEmpty()
                .WithMessage("Writer biography is required");
        }
    }
}
