using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Commands.DirectorCommands;
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

        public DirectorsController(IAddDirectorCommand addDirector,
            IGetDirectorsCommand getDirectors,
            IGetDirectorCommand getDirector,
            IEditDirectorCommand editDirector,
            IDeleteDirectorCommand deleteDirector, 
            IGetDirectorsListCommand getDirectorsList)
        {
            _addDirector = addDirector;
            _getDirectors = getDirectors;
            _getDirector = getDirector;
            _editDirector = editDirector;
            _deleteDirector = deleteDirector;
            _getDirectorsList = getDirectorsList;
        }


        // GET: api/Directors
        [HttpGet]
        public IActionResult Get([FromQuery] DirectorQuery query)
        {
            try
            {
                if (query.SearchQuery == null && query.PageNumber == 0 && query.PerPage == 0)
                {
                    var directors = _getDirectorsList.Execute(new SearchQuery());
                    return Ok(directors);
                }
                else
                {
                    var directors = _getDirectors.Execute(query);
                    return Ok(directors);
                }
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // GET: api/Directors/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                var director = _getDirector.Execute(id);
                return Ok(director);
            }
            catch (EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // POST: api/Directors
        [HttpPost]
        public IActionResult Post([FromBody] DirectorDto dto)
        {
            try
            {
                _addDirector.Execute(dto);
                return Ok();
            }
            catch(EntityAlreadyExistsException e)
            {
                return StatusCode(422, e.Message);
            }
        }

        // PUT: api/Directors/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] DirectorDto dto)
        {
            try
            {
                dto.Id = id;
                _editDirector.Execute(dto);
                return Ok();
            }
            catch (EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
            catch(EntityAlreadyExistsException e)
            {
                return StatusCode(422, e.Message);
            }
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _deleteDirector.Execute(id);
                return StatusCode(204);
            }
            catch (EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }
    }
}
