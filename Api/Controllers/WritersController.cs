using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Commands.WriterCommands;
using Application.DTO.WriterDto;
using Application.Exceptions;
using Application.Queries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WritersController : ControllerBase
    {
        protected readonly IAddWriterCommand _addWriter;
        protected readonly IGetWritersCommand _getWriters;
        protected readonly IGetWriterCommand _getWriter;
        protected readonly IEditWriterCommand _editWriter;
        protected readonly IDeleteWriterCommand _deleteWriter;

        public WritersController(IAddWriterCommand addWriter,
            IGetWritersCommand getWriters,
            IGetWriterCommand getWriter,
            IEditWriterCommand editWriter, 
            IDeleteWriterCommand deleteWriter)
        {
            _addWriter = addWriter;
            _getWriters = getWriters;
            _getWriter = getWriter;
            _editWriter = editWriter;
            _deleteWriter = deleteWriter;
        }

        // GET: api/Writers
        [HttpGet]
        public IActionResult Get([FromQuery] WriterQuery dto)
        {
            try
            {
                var writers = _getWriters.Execute(dto);
                return Ok(writers);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // GET: api/Writers/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                var writer = _getWriter.Execute(id);
                return Ok(writer);
            }
            catch (EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // POST: api/Writers
        [HttpPost]
        public IActionResult Post([FromBody] WriterDto dto)
        {
            try
            {
                _addWriter.Execute(dto);
                return Ok();
            }
            catch(EntityAlreadyExistsException e)
            {
                return StatusCode(422, e.Message);
            }
        }

        // PUT: api/Writers/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] WriterDto dto)
        {
            try
            {
                dto.Id = id;
                _editWriter.Execute(dto);
                return Ok();
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
                _deleteWriter.Execute(id);
                return StatusCode(204);
            }
            catch (EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }
    }
}
