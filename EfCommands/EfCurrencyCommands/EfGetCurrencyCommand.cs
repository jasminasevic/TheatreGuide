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
    public class EfGetCurrencyCommand : EfBaseCommand, IGetCurrencyCommand
    {
        public EfGetCurrencyCommand(EfContext context) : base(context)
        {
        }

        public GetCurrencyDto Execute(int request)
        {
            var currency = Context.Currencies
                .Where(c => c.Id == request)
                .FirstOrDefault();

            if (currency == null)
                throw new EntityNotFoundException(request.ToString());

            return new GetCurrencyDto
            {
                Id = currency.Id,
                CurrencyName = currency.CurrencyName
            };
        }
    }
}
