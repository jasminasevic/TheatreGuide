using Application.DTO.PurchaseDto;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Validators.PurchaseValidators
{
    public class PurchaseValidator : AbstractValidator<PurchaseDto>
    {
        public PurchaseValidator()
        {
            RuleFor(x => x.RepertoireId)
                .NotEmpty()
                .WithMessage("Repertoire is required");

            RuleFor(x => x.RowNumber)
                .NotEmpty()
                .WithMessage("Row is required");

            RuleFor(x => x.SeatNumber)
                .NotEmpty()
                .WithMessage("Seat number is required");

            RuleFor(x => x.UserId)
                .NotEmpty()
                .WithMessage("User is required");

            RuleFor(x => x.SectorId)
                .NotEmpty()
                .WithMessage("Sector is required");
        }

    }
}
