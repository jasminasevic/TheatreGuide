using Application.DTO.CurrencyDto;
using EfDataAccess;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Application.Validators.CurrencyValidators
{
    public class CurrencyValidator : AbstractValidator<CurrencyDto>
    {
        public CurrencyValidator(EfContext context)
        {
            RuleFor(x => x.CurrencyName)
                .NotEmpty()
                .WithMessage("Currency is required");
        }
    }
}
