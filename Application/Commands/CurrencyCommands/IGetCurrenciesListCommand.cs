using Application.DTO.CurrencyDto;
using Application.Interfaces;
using Application.Queries;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.CurrencyCommands
{
    public interface IGetCurrenciesListCommand : ICommand<SearchQuery, IEnumerable<GetCurrencyDto>>
    {
    }
}
