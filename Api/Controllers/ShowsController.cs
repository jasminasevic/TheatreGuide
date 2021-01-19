using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Commands.ShowCommands;
using Application.DTO.ShowDto;
using Application.Exceptions;
using Application.Queries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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
            IGetPopularShowsFilteredByIdAndTheatreCommand getPopularShowsFilteredByIdAndTheatre)
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
        }

        // GET: api/Shows
        [HttpGet]
        public IActionResult Get([FromQuery] ShowQuery query)
        {
            try
            {
                if (query.SearchQuery == null && query.PageNumber == 0 
                        && query.PerPage == 0 && query.Type == null)
                {
                    var shows = _getShowsList.Execute(new SearchQuery());
                    return Ok(shows);
                }
                if (query.Type == "popularShows" && query.ShowId != null)
                {
                    var shows = _getPopularShowsFilteredById.Execute(Convert.ToInt32(query.ShowId));
                    return Ok(shows);
                }
                if (query.Type == "popularShows" && query.TheatreId != null)
                {
                    var shows = _getPopularShowsFilteredByTheatre.Execute(Convert.ToInt32(query.TheatreId));
                    return Ok(shows);
                }
                if (query.Type == "popularShows" && query.ActorId != null)
                {
                    var shows = _getPopularShowsFilteredByActor.Execute(Convert.ToInt32(query.ActorId));
                    return Ok(shows);
                }
                if (query.Type == "popularShows" && query.DirectorId != null)
                {
                    var shows = _getPopularShowsFilteredByDirector.Execute(Convert.ToInt32(query.DirectorId));
                    return Ok(shows);
                }
                if (query.Type == "popularShows")
                {
                    var shows = _getPopularShows.Execute(new ShowQuery());
                    return Ok(shows);
                }
                if (query.Type == "popularShowsFilteredByIdAndTheatre")
                {
                    var shows = _getPopularShowsFilteredByIdAndTheatre.Execute(query);
                    return Ok(shows);
                }
                var allShows = _getShows.Execute(query);
                return Ok(allShows);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // GET: api/Shows/5
        [HttpGet("{id}")]
        public IActionResult Get(int id, [FromQuery] ShowQuery query)
        {
            try
            {
                if(query.Type == "repertoire")  
                {
                    var showForRepertoire = _getShowForRepertoire.Execute(id);
                    return Ok(showForRepertoire);
                }

                if(query.Type == "ticketPrices")
                {
                    var showForRepertoire = _getShowWithPricesForRepertoire.Execute(id);
                    return Ok(showForRepertoire);
                }

                var show = _getShow.Execute(id);
                return Ok(show);
            }
            catch (EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // POST: api/Shows
        [HttpPost]
        public IActionResult Post([FromForm] ShowDto dto)
        {
            try
            {
                _addShow.Execute(dto);
                return Ok();
            }
            catch(EntityAlreadyExistsException e)
            {
                return StatusCode(422, e.Message);
            }
            catch(Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        // PUT: api/Shows/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromForm] ShowDto dto)
        {
            try
            {
                dto.Id = id;
                _editShow.Execute(dto);
                return StatusCode(204);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _deleteShow.Execute(id);
                return StatusCode(204);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }
    }
}
