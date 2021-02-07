using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Commands.ActorCommands;
using Application.Core;
using Application.DTO.ActorDto;
using Application.Exceptions;
using Application.Interfaces;
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
        protected readonly IApplicationPerformer _appPerformer;
        protected readonly UseCaseExecutor _executor;

        public ActorsController(IAddActorCommand addActor,
            IGetActorsCommand getActors,
            IGetActorCommand getActor,
            IEditActorCommand editCommand,
            IDeleteActorCommand deleteActor,
            IGetActorsListCommand getActorsList,
            IApplicationPerformer appPerformer, 
            UseCaseExecutor executor)
        {
            _addActor = addActor;
            _getActors = getActors;
            _getActor = getActor;
            _editCommand = editCommand;
            _deleteActor = deleteActor;
            _getActorsList = getActorsList;
            _appPerformer = appPerformer;
            _executor = executor;
        }

        // GET: api/Actors
        [HttpGet]
        public IActionResult Get([FromQuery] ActorQuery query)
        {
            if (query.SearchQuery == null && query.PageNumber == 0 && query.PerPage == 0)
            {
                var actorList = _executor.ExecuteQuery(_getActorsList, new SearchQuery());
                return Ok(actorList);
            }

            var actors = _executor.ExecuteQuery(_getActors, query);
            return Ok(actors);
        }

        // GET: api/Actors/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var actor = _executor.ExecuteQuery(_getActor, id);
            return Ok(actor);
        }

        // POST: api/Actors
        [HttpPost]
        public IActionResult Post([FromForm] ActorDto dto)
        {
            _executor.ExecuteCommand(_addActor, dto);
            return Ok();
        }

        // PUT: api/Actors/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromForm] ActorDto dto)
        {
            dto.Id = id;
            _executor.ExecuteCommand(_editCommand, dto);
            return StatusCode(204);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _executor.ExecuteCommand(_deleteActor, id);
            return StatusCode(204);
        }
    }
}
