using Application.DTO.PurchaseDto;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Validators.PurchaseValidators
{
    public class PurchaseValidator : AbstractValidator<AddPurchaseDto>
    {
        public PurchaseValidator()
        {
            RuleFor(x => x.RepertoireId)
                .NotEmpty()
                .WithMessage("Repertoire is required");

            RuleFor(x => x.UserId)
                .NotEmpty()
                .WithMessage("User is required");

            RuleFor(x => x.AddSeatDtos)
                .NotEmpty()
                .WithMessage("Seat details are required");
        }

    }
}
