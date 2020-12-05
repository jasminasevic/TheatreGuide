﻿using Application.Commands.CurrencyCommands;
using Application.DTO.CurrencyDto;
using Application.Queries;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfCurrencyCommands
{
    public class EfGetCurrenciesListCommand : EfBaseCommand, IGetCurrenciesListCommand
    {
        public EfGetCurrenciesListCommand(EfContext context) : base(context)
        {
        }

        public IEnumerable<GetCurrencyDto> Execute(SearchQuery request)
        {
            var currencies = Context.Currencies
                .AsQueryable();

            var data = currencies.Select(c => new GetCurrencyDto
            {
                Id = c.Id,
                CurrencyName = c.CurrencyName
            });

            data = data.OrderBy(c => c.CurrencyName);

            return data;
        }
    }
}