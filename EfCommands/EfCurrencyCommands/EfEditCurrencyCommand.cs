﻿using Application.Commands.CurrencyCommands;
using Application.DTO.CurrencyDto;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfCurrencyCommands
{
    public class EfEditCurrencyCommand : EfBaseCommand, IEditCurrencyCommand
    {
        public EfEditCurrencyCommand(EfContext context) : base(context)
        {
        }

        public void Execute(CurrencyDto request)
        {
            var currency = Context.Currencies.Find(request.Id);

            if (currency == null)
                throw new EntityNotFoundException(request.ToString());

            if (request.CurrencyName.ToLower() != currency.CurrencyName.ToLower()
                && Context.Currencies.Any(c => c.CurrencyName.ToLower() == request.CurrencyName.ToLower()))
                    throw new EntityAlreadyExistsException(request.CurrencyName);

            currency.CurrencyName = request.CurrencyName;

            Context.SaveChanges();
        }
    }
}