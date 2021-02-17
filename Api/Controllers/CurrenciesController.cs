using Application.Commands.CurrencyCommands;
using Application.UseCase;
using Application.DTO.CurrencyDto;
using Application.Exceptions;
using Application.Queries;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CurrenciesController : ControllerBase
    {
        private readonly IGetCurrenciesCommand _getCurrencies;
        private readonly IGetCurrenciesListCommand _getCurrenciesList;
        private readonly IGetCurrencyCommand _getCurrency;
        private readonly IAddCurrencyCommand _addCurrency;
        private readonly IEditCurrencyCommand _editCurrency;
        private readonly IDeleteCurrencyCommand _deleteCurrency;
        protected readonly UseCaseExecutor _executor;

        public CurrenciesController(IGetCurrenciesCommand getCurrencies,
            IGetCurrenciesListCommand getCurrenciesList,
            IGetCurrencyCommand getCurrency,
            IAddCurrencyCommand addCurrency,
            IEditCurrencyCommand editCurrency,
            IDeleteCurrencyCommand deleteCurrency, 
            UseCaseExecutor executor)
        {
            _getCurrencies = getCurrencies;
            _getCurrenciesList = getCurrenciesList;
            _getCurrency = getCurrency;
            _addCurrency = addCurrency;
            _editCurrency = editCurrency;
            _deleteCurrency = deleteCurrency;
            _executor = executor;
        }

        // GET: api/Currencies
        [HttpGet]
        [Authorize]

        public IActionResult Get([FromQuery] CurrencyQuery query)
        {
            if (query.SearchQuery == null && query.PageNumber == 0 && query.PerPage == 0)
            {
                var currenciesList = _executor.ExecuteQuery(_getCurrenciesList, new SearchQuery());
                return Ok(currenciesList);
            }
            var currencies = _executor.ExecuteQuery(_getCurrencies, query);
            return Ok(currencies);
        }

        // GET api/Currencies/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var currency = _executor.ExecuteQuery(_getCurrency, id);
            return Ok(currency);
        }

        // POST api/Currencies
        [HttpPost]
        [Authorize]
        public IActionResult Post([FromBody] CurrencyDto dto)
        {
            _executor.ExecuteCommand(_addCurrency, dto);
            return Ok();
        }

        // PUT api/Currencies/5
        [HttpPut("{id}")]
        [Authorize]
        public IActionResult Put(int id, [FromBody] CurrencyDto dto)
        {
            dto.Id = id;
            _executor.ExecuteCommand(_editCurrency, dto);
            return StatusCode(204);
        }

        // DELETE api/CurrenciesController/5
        [HttpDelete("{id}")]
        [Authorize]
        public IActionResult Delete(int id)
        {
            _executor.ExecuteCommand(_deleteCurrency, id);
            return StatusCode(204);
        }
    }
}
