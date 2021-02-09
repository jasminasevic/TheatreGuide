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
    public class EfEditCurrencyCommand : EfBaseCommand, IEditCurrencyCommand
    {
        private readonly CurrencyValidator _validator;
        public EfEditCurrencyCommand(EfContext context, CurrencyValidator validator) 
            : base(context)
        {
            _validator = validator;
        }

        public int Id => 15;

        public string Name => "Edit Currency Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin };

        public void Execute(CurrencyDto request)
        {
            _validator.ValidateAndThrow(request);

            var currency = Context.Currencies.Find(request.Id);

            if (currency == null)
                throw new EntityNotFoundException(request.Id.ToString());

            currency.CurrencyName = request.CurrencyName;

            Context.SaveChanges();
        }
    }
}
