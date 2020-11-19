using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Commands.ActorCommands;
using Application.DTO.ActorDto;
using Application.Exceptions;
using Application.Queries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActorsController : ControllerBase
    {
        protected readonly IAddActorCommand _addActor;
        protected readonly IGetActorsCommand _getActors;
        protected readonly IGetActorCommand _getActor;
        protected readonly IEditActorCommand _editCommand;
        protected readonly IDeleteActorCommand _deleteActor;
        protected readonly IGetActorsListCommand _getActorsList;

        public ActorsController(IAddActorCommand addActor,
            IGetActorsCommand getActors,
            IGetActorCommand getActor,
            IEditActorCommand editCommand,
            IDeleteActorCommand deleteActor, 
            IGetActorsListCommand getActorsList)
        {
            _addActor = addActor;
            _getActors = getActors;
            _getActor = getActor;
            _editCommand = editCommand;
            _deleteActor = deleteActor;
            _getActorsList = getActorsList;
        }

        // GET: api/Actors
        [HttpGet]
        public IActionResult Get([FromQuery] ActorQuery query)
        {
            try
            {
                if (query.SearchQuery == null && query.PageNumber == 0 && query.PerPage == 0)
                {
                    var actors = _getActorsList.Execute(new SearchQuery());
                    return Ok(actors);
                }
                else 
                {
                    var actors = _getActors.Execute(query);
                    return Ok(actors);
                }
            }
            catch (EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // GET: api/Actors/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                var actor = _getActor.Execute(id);
                return Ok(actor);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // POST: api/Actors
        [HttpPost]
        public IActionResult Post([FromForm] ActorDto dto)
        {
            try
            {
                _addActor.Execute(dto);
                return Ok();
            }
            catch(EntityAlreadyExistsException e)
            {
                return StatusCode(422, e.Message);
            }
        }

        // PUT: api/Actors/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromForm] ActorDto dto)
        {
            try
            {
                dto.Id = id;
                _editCommand.Execute(dto);
                return StatusCode(204);
            }
            catch (EntityNotFoundException e)
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
                _deleteActor.Execute(id);
                return StatusCode(204);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }
    }
}
