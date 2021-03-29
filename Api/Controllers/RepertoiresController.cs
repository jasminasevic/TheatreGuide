using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Commands.RepertoireCommands;
using Application.UseCase;
using Application.DTO.RepertoireDto;
using Application.Exceptions;
using Application.Queries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RepertoiresController : ControllerBase
    {
        protected readonly IAddRepertoireCommand _addRepertoire;
        protected readonly IGetRepertoireCommand _getRepertoire;
        protected readonly IGetRepertoiresCommand _getRepertoires;
        protected readonly IDeleteRepertoireCommand _deleteRepertoire;
        protected readonly IEditRepertoireCommand _editRepertoire;
        protected readonly IGetUpcomingShowsCommand _getUpcomingShows;
        protected readonly IGetUpcomingPremieresCommand _getUpcomingPremieres;
        protected readonly IGetRepertoiresFilteredByTheatreCommand _getRepertoiresFilteredByTheatre;
        protected readonly UseCaseExecutor _executor;

        public RepertoiresController(IAddRepertoireCommand addRepertoire,
            IGetRepertoireCommand getRepertoire,
            IGetRepertoiresCommand getRepertoires,
            IDeleteRepertoireCommand deleteRepertoire,
            IEditRepertoireCommand editRepertoire,
            IGetUpcomingShowsCommand getUpcomingShows,
            IGetUpcomingPremieresCommand getUpcomingPremieres,
            IGetRepertoiresFilteredByTheatreCommand getRepertoiresFilteredByTheatre,
            UseCaseExecutor executor)
        {
            _addRepertoire = addRepertoire;
            _getRepertoire = getRepertoire;
            _getRepertoires = getRepertoires;
            _deleteRepertoire = deleteRepertoire;
            _editRepertoire = editRepertoire;
            _getUpcomingShows = getUpcomingShows;
            _getUpcomingPremieres = getUpcomingPremieres;
            _getRepertoiresFilteredByTheatre = getRepertoiresFilteredByTheatre;
            _executor = executor;
        }


        // GET: api/Repertoires
        [HttpGet]
        public IActionResult Get([FromQuery] RepertoireQuery query)
        {
            if (query.Type == "upcomingShows")
            {
                var upcomingShows = _executor.ExecuteQuery(_getUpcomingShows, new RepertoireQuery());
                return Ok(upcomingShows);
            }
            if (query.Type == "upcomingPremieres")
            {
                var upcomingPremieres = _executor.ExecuteQuery(_getUpcomingPremieres, new RepertoireQuery());
                return Ok(upcomingPremieres);
            }
            if (query.Type == "repertoiresFilteredByTheatre")
            {
                var repertoiresInTheatre = _executor.ExecuteQuery(_getRepertoiresFilteredByTheatre, query);
                return Ok(repertoiresInTheatre);
            }
            var repertoires = _executor.ExecuteQuery(_getRepertoires, query);
            return Ok(repertoires);
        }

        // GET: api/Repertoires/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var repertoire = _executor.ExecuteQuery(_getRepertoire, id);
            return Ok(repertoire);
        }

        // POST: api/Repertoires
        [HttpPost]
        [Authorize]
        public IActionResult Post([FromForm] RepertoireDto dto)
        {
            _executor.ExecuteCommand(_addRepertoire, dto);
            return Ok();
        }

        // PUT: api/Repertoires/5
        [HttpPut("{id}")]
        [Authorize]
        public IActionResult Put(int id, [FromForm] RepertoireDto dto)
        {
            dto.Id = id;
            _executor.ExecuteCommand(_editRepertoire, dto);
            return StatusCode(204);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        [Authorize]
        public IActionResult Delete(int id)
        {
            _executor.ExecuteCommand(_deleteRepertoire, id);
            return StatusCode(204);
        }
    }
}
