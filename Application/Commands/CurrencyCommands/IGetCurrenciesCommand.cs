using Application.DTO.CurrencyDto;
using Application.Interfaces;
using Application.Queries;
using Application.Responses;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.CurrencyCommands
{
    public interface IGetCurrenciesCommand : ICommand<CurrencyQuery, PagedResponses<GetCurrencyDto>>
    {
    }
}
