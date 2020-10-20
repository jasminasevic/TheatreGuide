using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Commands.TheatreCommands;
using Application.DTO.TheatreDto;
using Application.Exceptions;
using Application.Queries;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class TheatresController : ControllerBase
    {
        protected readonly IAddTheatreCommand _addTheatre;
        protected readonly IGetTheatresCommand _getTheatres;
        protected readonly IGetTheatreCommand _getTheatre;
        protected readonly IDeleteTheatreCommand _deleteTheatre;
        protected readonly IEditTheatreCommand _editTheatre;

        public TheatresController(IAddTheatreCommand addTheatre,
            IGetTheatresCommand getTheatres,
            IGetTheatreCommand getTheatre,
            IDeleteTheatreCommand deleteTheatre, 
            IEditTheatreCommand editTheatre)
        {
            _addTheatre = addTheatre;
            _getTheatres = getTheatres;
            _getTheatre = getTheatre;
            _deleteTheatre = deleteTheatre;
            _editTheatre = editTheatre;
        }

        // GET: api/Theatres
        [HttpGet]
        public IActionResult Get([FromQuery]TheatreQuery query)
        {
            try
            {
                var theatres = _getTheatres.Execute(query);
                return Ok(theatres);
            }
            catch(Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        // GET: api/Theatres/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                var theatre = _getTheatre.Execute(id);
                return Ok(theatre);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // POST: api/Theatres
       
        [HttpPost]
        public IActionResult Post([FromForm] TheatreDto dto)
        {
            try
            {
                _addTheatre.Execute(dto);
                return Ok();
            }
            catch (EntityAlreadyExistsException e)
            {
                return StatusCode(422, e.Message);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        // PUT: api/Theatres/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromForm] TheatreDto dto)
        {
            try
            {
                dto.Id = id;
                _editTheatre.Execute(dto);
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
                _deleteTheatre.Execute(id);
                return StatusCode(204);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }
    }
}
