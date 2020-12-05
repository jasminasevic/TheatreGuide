using Application.Commands.CurrencyCommands;
using Application.DTO.CurrencyDto;
using Application.Exceptions;
using Application.Queries;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


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

        public CurrenciesController(IGetCurrenciesCommand getCurrencies,
            IGetCurrenciesListCommand getCurrenciesList,
            IGetCurrencyCommand getCurrency,
            IAddCurrencyCommand addCurrency,
            IEditCurrencyCommand editCurrency, 
            IDeleteCurrencyCommand deleteCurrency)
        {
            _getCurrencies = getCurrencies;
            _getCurrenciesList = getCurrenciesList;
            _getCurrency = getCurrency;
            _addCurrency = addCurrency;
            _editCurrency = editCurrency;
            _deleteCurrency = deleteCurrency;
        }

        // GET: api/Currencies
        [HttpGet]
        public IActionResult Get([FromQuery] CurrencyQuery query)
        {
            try
            {
                if (query.SearchQuery == null && query.PageNumber == 0 && query.PerPage == 0)
                {
                    var currenciesList = _getCurrenciesList.Execute(new SearchQuery());
                    return Ok(currenciesList);
                }
                var currencies = _getCurrencies.Execute(query);
                return Ok(currencies);
            }
            catch (EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // GET api/Currencies/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                var currency = _getCurrency.Execute(id);
                return Ok(currency);
            }
            catch (EntityNotFoundException e)
            {
                return NotFound(e.ToString());
            }
        }

        // POST api/Currencies
        [HttpPost]
        public IActionResult Post([FromBody] CurrencyDto dto)
        {
            try
            {
                _addCurrency.Execute(dto);
                return Ok();
            }
            catch (EntityAlreadyExistsException e)
            {
                return StatusCode(422, e.Message);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        // PUT api/Currencies/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] CurrencyDto dto)
        {
            try
            {
                dto.Id = id;
                _editCurrency.Execute(dto);
                return StatusCode(204);
            }
            catch (EntityNotFoundException e)
            {
                return NotFound(e);
            }
            catch (EntityAlreadyExistsException e)
            {
                return StatusCode(422, e.Message);
            }
        }

        // DELETE api/CurrenciesController/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _deleteCurrency.Execute(id);
                return StatusCode(204);
            }
            catch (EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }
    }
}
