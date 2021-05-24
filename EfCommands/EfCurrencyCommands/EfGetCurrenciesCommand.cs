using Application.Commands.CurrencyCommands;
using Application.DTO.CurrencyDto;
using Application.Exceptions;
using Application.Interfaces;
using Application.Queries;
using Application.Responses;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfCurrencyCommands
{
    public class EfGetCurrenciesCommand : EfBaseCommand, IGetCurrenciesCommand
    {
        public EfGetCurrenciesCommand(EfContext context) : base(context)
        {
        }

        public int Id => 16;

        public string Name => "Get Currencies Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Anonymus, Role.Admin, Role.Theatre, Role.User };

        public bool ContainsSensitiveData => false;

        public PagedResponses<GetCurrencyDto> Execute(CurrencyQuery request)
        {
            var currencies = Context.Currencies
                .AsQueryable();

            //Filtering logic
            if (request.CurrencyName != null)
                currencies = currencies.Where(c => c.CurrencyName.ToLower()
                 .Contains(request.CurrencyName.ToLower()));

            if (request.SearchQuery != null)
                currencies = currencies.Where(c => c.CurrencyName.ToLower()
                 .Contains(request.SearchQuery.ToLower()));

            if (currencies == null)
                throw new EntityNotFoundException(currencies.ToString());

            var data = currencies.Select(c => new GetCurrencyDto
            {
                Id = c.Id,
                CurrencyName = c.CurrencyName
            });

            //Sorting logic
            var sortOrder = request.SortOrder;

            switch(sortOrder)
            {
                case "currencyName_desc":
                    data = data.OrderByDescending(c => c.CurrencyName);
                    break;
                case "currencyName_asc":
                    data = data.OrderBy(c => c.CurrencyName);
                    break;
                default:
                    data = data.OrderBy(c => c.CurrencyName);
                    break;
            }

            var totalCount = data.Count();

            data = data.Skip((request.PageNumber - 1) * request.PerPage).Take(request.PerPage);
            var pagesCount = (int)Math.Ceiling((double)totalCount / request.PerPage);

            return new PagedResponses<GetCurrencyDto>
            {
                PageNumber = request.PageNumber,
                PagesCount = pagesCount,
                TotalCount = totalCount,
                Data = data
            };

        }

    }
}
