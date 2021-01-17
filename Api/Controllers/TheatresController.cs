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
        protected readonly IGetTheatresListCommand _getTheatresList;
        protected readonly IGetRecentlyJoinedTheatresCommand _getRecentlyJoinedTheatres;

        public TheatresController(IAddTheatreCommand addTheatre,
            IGetTheatresCommand getTheatres,
            IGetTheatreCommand getTheatre,
            IDeleteTheatreCommand deleteTheatre,
            IEditTheatreCommand editTheatre,
            IGetTheatresListCommand getTheatresList, 
            IGetRecentlyJoinedTheatresCommand getRecentlyJoinedTheatres)
        {
            _addTheatre = addTheatre;
            _getTheatres = getTheatres;
            _getTheatre = getTheatre;
            _deleteTheatre = deleteTheatre;
            _editTheatre = editTheatre;
            _getTheatresList = getTheatresList;
            _getRecentlyJoinedTheatres = getRecentlyJoinedTheatres;
        }

        // GET: api/Theatres
        [HttpGet]
        public IActionResult Get([FromQuery]TheatreQuery query)
       {
            try
            {
                if (query.SearchQuery == null && query.PageNumber == 0 
                    && query.PerPage == 0 && query.Type == null)
                {
                    var theatres = _getTheatresList.Execute(new SearchQuery());
                    return Ok(theatres);
                }
                if(query.Type == "recentlyJoinedTheatres")
                {
                    var theatres = _getRecentlyJoinedTheatres.Execute(new SearchQuery());
                    return Ok(theatres);
                }
                var allTheatres = _getTheatres.Execute(query);
                return Ok(allTheatres);
                
            }
            catch (Exception e)
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
