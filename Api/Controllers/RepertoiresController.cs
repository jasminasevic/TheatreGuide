using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Commands.RepertoireCommands;
using Application.DTO.RepertoireDto;
using Application.Exceptions;
using Application.Queries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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

        public RepertoiresController(IAddRepertoireCommand addRepertoire,
            IGetRepertoireCommand getRepertoire,
            IGetRepertoiresCommand getRepertoires,
            IDeleteRepertoireCommand deleteRepertoire, 
            IEditRepertoireCommand editRepertoire)
        {
            _addRepertoire = addRepertoire;
            _getRepertoire = getRepertoire;
            _getRepertoires = getRepertoires;
            _deleteRepertoire = deleteRepertoire;
            _editRepertoire = editRepertoire;
        }


        // GET: api/Repertoires
        [HttpGet]
        public IActionResult Get([FromQuery] RepertoireQuery query)
        {
            try
            {
                var repertoires = _getRepertoires.Execute(query);
                return Ok(repertoires);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // GET: api/Repertoires/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                var repertoire = _getRepertoire.Execute(id);
                return Ok(repertoire);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // POST: api/Repertoires
        [HttpPost]
        public IActionResult Post([FromForm] RepertoireDto dto)
        {
            try
            {
                _addRepertoire.Execute(dto);
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

        // PUT: api/Repertoires/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromForm] RepertoireDto dto)
        {
            try
            {
                dto.Id = id;
                _editRepertoire.Execute(dto);
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
                _deleteRepertoire.Execute(id);
                return StatusCode(204);
            }
            catch (EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }
    }
}
