using Application.Commands.CurrencyCommands;
using Application.DTO.CurrencyDto;
using Application.Interfaces;
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

        public int Id => 17;

        public string Name => "Get Currencies Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin, Role.Theatre, Role.User };

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
