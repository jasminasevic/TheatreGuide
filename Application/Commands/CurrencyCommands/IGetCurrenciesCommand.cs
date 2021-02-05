using Application.DTO.CurrencyDto;
using Application.Interfaces;
using Application.Queries;
using Application.Responses;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.CurrencyCommands
{
    public interface IGetCurrenciesCommand : IQuery<CurrencyQuery, PagedResponses<GetCurrencyDto>>
    {
    }
}
