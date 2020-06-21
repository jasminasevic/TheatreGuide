using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Commands.SubsceneCommands;
using Application.DTO.SubsceneDto;
using Application.Exceptions;
using Application.Queries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscenesController : ControllerBase
    {

        protected readonly IAddSubsceneCommand _addSubscene;
        protected readonly IGetSubsceneCommand _getSubscene;
        protected readonly IGetSubscenesCommand _getSubscenes;
        protected readonly IDeleteSubsceneCommand _deleteSubscene;
        protected readonly IEditSubsceneCommand _editSubscene;

        public SubscenesController(IAddSubsceneCommand addSubscene,
            IGetSubsceneCommand getSubscene,
            IGetSubscenesCommand getSubscenes,
            IDeleteSubsceneCommand deleteSubscene, 
            IEditSubsceneCommand editSubscene)
        {
            _addSubscene = addSubscene;
            _getSubscene = getSubscene;
            _getSubscenes = getSubscenes;
            _deleteSubscene = deleteSubscene;
            _editSubscene = editSubscene;
        }

        // GET: api/Subscenes
        [HttpGet]
        public IActionResult Get([FromQuery] SubsceneQuery query)
        {
            try
            {
                var subscenes = _getSubscenes.Execute(query);
                return Ok(subscenes);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // GET: api/Subscenes/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                var subscene = _getSubscene.Execute(id);
                return Ok(subscene);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // POST: api/Subscenes
        [HttpPost]
        public IActionResult Post([FromForm] AddSubsceneDto dto)
        {
            try
            {
                _addSubscene.Execute(dto);
                return StatusCode(200);
            }
            catch (EntityAlreadyExistsException e)
            {
                return StatusCode(422, e.Message);
            }
        }

        // PUT: api/Subscenes/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromForm] AddSubsceneDto dto)
        {
            try
            {
                dto.Id = id;
                _editSubscene.Execute(dto);
                return StatusCode(204);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
            catch(EntityAlreadyExistsException e)
            {
                return StatusCode(204);
            }
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _deleteSubscene.Execute(id);
                return StatusCode(204);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }
    }
}
