using Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.CurrencyCommands
{
    public interface IDeleteCurrencyCommand : ICommand<int>
    {
    }
}
