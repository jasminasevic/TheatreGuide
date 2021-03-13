using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Commands.ShowCommands;
using Application.UseCase;
using Application.DTO.ShowDto;
using Application.Exceptions;
using Application.Queries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShowsController : ControllerBase
    {
        protected readonly IAddShowCommand _addShow;
        protected readonly IGetShowCommand _getShow;
        protected readonly IGetShowsCommand _getShows;
        protected readonly IDeleteShowCommand _deleteShow;
        protected readonly IEditShowCommand _editShow;
        protected readonly IGetShowsListCommand _getShowsList;
        protected readonly IGetShowForRepertoireCommand _getShowForRepertoire;
        protected readonly IGetShowWithPricesForRepertoireCommand _getShowWithPricesForRepertoire;
        protected readonly IGetPopularShowsCommand _getPopularShows;
        protected readonly IGetPopularShowsFilteredByIdCommand _getPopularShowsFilteredById;
        protected readonly IGetPopularShowsFilteredByTheatreCommand _getPopularShowsFilteredByTheatre;
        protected readonly IGetPopularShowsFilteredByActorCommand _getPopularShowsFilteredByActor;
        protected readonly IGetPopularShowsFilteredByDirectorCommand _getPopularShowsFilteredByDirector;
        protected readonly IGetPopularShowsFilteredByIdAndTheatreCommand _getPopularShowsFilteredByIdAndTheatre;
        protected readonly IGetShowsFilteredByTheatreCommand _getShowsFilteredByTheatre;
        protected readonly UseCaseExecutor _executor;
        public ShowsController(IAddShowCommand addShow,
            IGetShowCommand getShow,
            IGetShowsCommand getShows,
            IDeleteShowCommand deleteShow,
            IEditShowCommand editShow,
            IGetShowsListCommand getShowsList,
            IGetShowForRepertoireCommand getShowForRepertoire,
            IGetShowWithPricesForRepertoireCommand getShowWithPricesForRepertoire,
            IGetPopularShowsCommand getPopularShows,
            IGetPopularShowsFilteredByIdCommand getPopularShowsFilteredById,
            IGetPopularShowsFilteredByTheatreCommand getPopularShowsFilteredByTheatre,
            IGetPopularShowsFilteredByActorCommand getPopularShowsFilteredByActor,
            IGetPopularShowsFilteredByDirectorCommand getPopularShowsFilteredByDirector,
            IGetPopularShowsFilteredByIdAndTheatreCommand getPopularShowsFilteredByIdAndTheatre,
            IGetShowsFilteredByTheatreCommand getShowsFilteredByTheatre,
            UseCaseExecutor executor)
        {
            _addShow = addShow;
            _getShow = getShow;
            _getShows = getShows;
            _deleteShow = deleteShow;
            _editShow = editShow;
            _getShowsList = getShowsList;
            _getShowForRepertoire = getShowForRepertoire;
            _getShowWithPricesForRepertoire = getShowWithPricesForRepertoire;
            _getPopularShows = getPopularShows;
            _getPopularShowsFilteredById = getPopularShowsFilteredById;
            _getPopularShowsFilteredByTheatre = getPopularShowsFilteredByTheatre;
            _getPopularShowsFilteredByActor = getPopularShowsFilteredByActor;
            _getPopularShowsFilteredByDirector = getPopularShowsFilteredByDirector;
            _getPopularShowsFilteredByIdAndTheatre = getPopularShowsFilteredByIdAndTheatre;
            _getShowsFilteredByTheatre = getShowsFilteredByTheatre;
            _executor = executor;
        }

        // GET: api/Shows
        [HttpGet]
        public IActionResult Get([FromQuery] ShowQuery query)
        {
            if (query.SearchQuery == null && query.PageNumber == 0
                        && query.PerPage == 0 && query.Type == null)
            {
                var shows = _executor.ExecuteQuery(_getShowsList, new SearchQuery());
                return Ok(shows);
            }
            if (query.Type == "popularShows" && query.ShowId != null)
            {
                var shows = _executor.ExecuteQuery(_getPopularShowsFilteredById, 
                    Convert.ToInt32(query.ShowId));
                return Ok(shows);
            }
            if (query.Type == "popularShows" && query.TheatreId != null)
            {
                var shows = _executor.ExecuteQuery(_getPopularShowsFilteredByTheatre, 
                    Convert.ToInt32(query.TheatreId));
                return Ok(shows);
            }
            if (query.Type == "popularShows" && query.ActorId != null)
            {
                var shows = _executor.ExecuteQuery(_getPopularShowsFilteredByActor, 
                    Convert.ToInt32(query.ActorId));
                return Ok(shows);
            }
            if (query.Type == "popularShows" && query.DirectorId != null)
            {
                var shows = _executor.ExecuteQuery(_getPopularShowsFilteredByDirector, 
                    Convert.ToInt32(query.DirectorId));
                return Ok(shows);
            }
            if (query.Type == "popularShows")
            {
                var shows = _executor.ExecuteQuery(_getPopularShows, new ShowQuery());
                return Ok(shows);
            }
            if (query.Type == "popularShowsFilteredByIdAndTheatre")
            {
                var shows = _executor.ExecuteQuery(_getPopularShowsFilteredByIdAndTheatre, query);
                return Ok(shows);
            }
            if(query.Type == "showsFilteredByTheatre")
            {
                var shows = _executor.ExecuteQuery(_getShowsFilteredByTheatre, query);
                return Ok(shows);
            }
            var allShows = _executor.ExecuteQuery(_getShows, query);
            return Ok(allShows);
        }

        // GET: api/Shows/5
        [HttpGet("{id}")]
        public IActionResult Get(int id, [FromQuery] ShowQuery query)
        {
            if (query.Type == "repertoire")
            {
                var showForRepertoire = _executor.ExecuteQuery(_getShowForRepertoire, id);
                return Ok(showForRepertoire);
            }

            if (query.Type == "ticketPrices")
            {
                var showForRepertoire = _executor.ExecuteQuery(_getShowWithPricesForRepertoire, id);
                return Ok(showForRepertoire);
            }

            var show = _executor.ExecuteQuery(_getShow, id);
            return Ok(show);
        }

        // POST: api/Shows
        [HttpPost]
        [Authorize]
        public IActionResult Post([FromForm] ShowDto dto)
        {
            _executor.ExecuteCommand(_addShow, dto);
            return Ok();
        }

        // PUT: api/Shows/5
        [HttpPut("{id}")]
        [Authorize]
        public IActionResult Put(int id, [FromForm] ShowDto dto)
        {
            dto.Id = id;
            _executor.ExecuteCommand(_editShow, dto);
            return StatusCode(204);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        [Authorize]
        public IActionResult Delete(int id)
        {
            _executor.ExecuteCommand(_deleteShow, id);
            return StatusCode(204);
        }
    }
}
