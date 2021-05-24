using Application.Commands.CurrencyCommands;
using Application.DTO.CurrencyDto;
using Application.Exceptions;
using Application.Interfaces;
using Application.Validators.CurrencyValidators;
using EfDataAccess;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfCurrencyCommands
{
    public class EfAddCurrencyCommand : EfBaseCommand, IAddCurrencyCommand
    {
        private readonly CurrencyValidator _validator;
        public EfAddCurrencyCommand(EfContext context, CurrencyValidator validator) 
            : base(context)
        {
            _validator = validator;
        }

        public int Id => 13;

        public string Name => "Add New Currency Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin };

        public bool ContainsSensitiveData => false;

        public void Execute(CurrencyDto request)
        {
            _validator.ValidateAndThrow(request);

            Context.Currencies.Add(new Domain.Currency
            {
                CurrencyName = request.CurrencyName
            });

            Context.SaveChanges();
        }
    }
}
