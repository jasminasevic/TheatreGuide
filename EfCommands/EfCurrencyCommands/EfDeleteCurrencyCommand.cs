﻿using Application.Commands.CurrencyCommands;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCommands.EfCurrencyCommands
{
    public class EfDeleteCurrencyCommand : EfBaseCommand, IDeleteCurrencyCommand
    {
        public EfDeleteCurrencyCommand(EfContext context) : base(context)
        {
        }

        public void Execute(int request)
        {
            var currency = Context.Currencies.Find(request);

            if (currency == null)
                throw new EntityNotFoundException(request.ToString());

            Context.Currencies.Remove(currency);
            Context.SaveChanges();
        }
    }
}
