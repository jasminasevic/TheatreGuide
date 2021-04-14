using Application.Commands.SectorCommands;
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
    public class SectorsController : ControllerBase
    {
        protected readonly IGetSectorWithUnavailableSeatsCommand _getSectorWithUnavailableSeats;
        protected readonly UseCaseExecutor _executor;

        public SectorsController(IGetSectorWithUnavailableSeatsCommand getSectorWithUnavailableSeats, UseCaseExecutor executor)
        {
            _getSectorWithUnavailableSeats = getSectorWithUnavailableSeats;
            _executor = executor;
        }

        // GET: api/<SectorsController>
        [HttpGet]
        public IActionResult Get([FromQuery] SectorQuery query)
        {
            var sectorsWithUnavailableSeats = _executor.ExecuteQuery(_getSectorWithUnavailableSeats, query);
            return Ok(sectorsWithUnavailableSeats);
        }

        // GET api/<SectorsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<SectorsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<SectorsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<SectorsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
