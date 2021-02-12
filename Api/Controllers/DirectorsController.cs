using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Commands.DirectorCommands;
using Application.UseCase;
using Application.DTO.DirectorDto;
using Application.Exceptions;
using Application.Queries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DirectorsController : ControllerBase
    {
        protected readonly IAddDirectorCommand _addDirector;
        protected readonly IGetDirectorsCommand _getDirectors;
        protected readonly IGetDirectorCommand _getDirector;
        protected readonly IEditDirectorCommand _editDirector;
        protected readonly IDeleteDirectorCommand _deleteDirector;
        protected readonly IGetDirectorsListCommand _getDirectorsList;
        protected readonly UseCaseExecutor _executor;

        public DirectorsController(IAddDirectorCommand addDirector,
            IGetDirectorsCommand getDirectors,
            IGetDirectorCommand getDirector,
            IEditDirectorCommand editDirector,
            IDeleteDirectorCommand deleteDirector,
            IGetDirectorsListCommand getDirectorsList, 
            UseCaseExecutor executor)
        {
            _addDirector = addDirector;
            _getDirectors = getDirectors;
            _getDirector = getDirector;
            _editDirector = editDirector;
            _deleteDirector = deleteDirector;
            _getDirectorsList = getDirectorsList;
            _executor = executor;
        }


        // GET: api/Directors
        [HttpGet]
        public IActionResult Get([FromQuery] DirectorQuery query)
        {
            if (query.SearchQuery == null && query.PageNumber == 0 && query.PerPage == 0)
            {
                var directorList = _executor.ExecuteQuery(_getDirectorsList, new SearchQuery());
                return Ok(directorList);
            }
            var directors = _executor.ExecuteQuery(_getDirectors, query);
            return Ok(directors);
        }

        // GET: api/Directors/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var director = _executor.ExecuteQuery(_getDirector, id);
            return Ok(director);
        }

        // POST: api/Directors
        [HttpPost]
        public IActionResult Post([FromBody] DirectorDto dto)
        {
            _executor.ExecuteCommand(_addDirector, dto);
            return Ok();
        }

        // PUT: api/Directors/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] DirectorDto dto)
        {
            dto.Id = id;
            _executor.ExecuteCommand(_editDirector, dto);
            return Ok();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _executor.ExecuteCommand(_deleteDirector, id);
            return StatusCode(204);
        }
    }
}
