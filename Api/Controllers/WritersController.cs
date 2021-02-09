using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Commands.WriterCommands;
using Application.Core;
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
        protected readonly UseCaseExecutor _executor;

        public WritersController(IAddWriterCommand addWriter,
            IGetWritersCommand getWriters,
            IGetWriterCommand getWriter,
            IEditWriterCommand editWriter,
            IDeleteWriterCommand deleteWriter, 
            UseCaseExecutor executor)
        {
            _addWriter = addWriter;
            _getWriters = getWriters;
            _getWriter = getWriter;
            _editWriter = editWriter;
            _deleteWriter = deleteWriter;
            _executor = executor;
        }

        // GET: api/Writers
        [HttpGet]
        public IActionResult Get([FromQuery] WriterQuery dto)
        {
            var writers = _executor.ExecuteQuery(_getWriters, dto);
            return Ok(writers);
        }

        // GET: api/Writers/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var writer = _executor.ExecuteQuery(_getWriter, id);
            return Ok(writer);
        }

        // POST: api/Writers
        [HttpPost]
        public IActionResult Post([FromBody] WriterDto dto)
        {
            _executor.ExecuteCommand(_addWriter, dto);
            return Ok();
        }

        // PUT: api/Writers/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] WriterDto dto)
        {
            dto.Id = id;
            _executor.ExecuteCommand(_editWriter, dto);
            return Ok();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _executor.ExecuteCommand(_deleteWriter, id);
            return StatusCode(204);
        }
    }
}
