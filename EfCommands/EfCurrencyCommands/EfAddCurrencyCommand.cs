using Application.Commands.CurrencyCommands;
using Application.DTO.CurrencyDto;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfCurrencyCommands
{
    public class EfAddCurrencyCommand : EfBaseCommand, IAddCurrencyCommand
    {
        public EfAddCurrencyCommand(EfContext context) : base(context)
        {
        }

        public void Execute(CurrencyDto request)
        {
            if (Context.Currencies.Any(c => c.CurrencyName.ToLower() == request.CurrencyName))
                throw new EntityAlreadyExistsException(request.CurrencyName);

            if (request.CurrencyName == null)
                throw new Exception("Currency is required");

            Context.Currencies.Add(new Domain.Currency
            {
                CurrencyName = request.CurrencyName
            });

            Context.SaveChanges();
        }
    }
}
