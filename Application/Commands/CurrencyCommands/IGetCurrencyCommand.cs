using Application.DTO.CurrencyDto;
using Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.CurrencyCommands
{
    public interface IGetCurrencyCommand : IQuery<int, GetCurrencyDto>
    {
    }
}
