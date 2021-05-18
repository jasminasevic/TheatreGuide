using Application.Commands.LoggingCommands;
using Application.Queries;
using Application.UseCase;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoggingsController : ControllerBase
    {
        protected readonly IGetLoggingsCommand _getLoggingsCommand;
        protected readonly UseCaseExecutor _executor;

        public LoggingsController(IGetLoggingsCommand getLoggingsCommand, 
            UseCaseExecutor executor)
        {
            _getLoggingsCommand = getLoggingsCommand;
            _executor = executor;
        }

        // GET: api/<LoggingsController>
        [HttpGet]
        public IActionResult Get([FromQuery] LoggingQuery query)
        {
            var loggings = _executor.ExecuteQuery(_getLoggingsCommand, query);
            return Ok(loggings);
        }

        // GET api/<LoggingsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<LoggingsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<LoggingsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<LoggingsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
