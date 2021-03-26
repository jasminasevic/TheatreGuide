using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Commands.TheatreCommands;
using Application.UseCase;
using Application.DTO.TheatreDto;
using Application.Exceptions;
using Application.Queries;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

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
        protected readonly IGetAllTheatresListCommand _getAllTheatresList;
        protected readonly IGetRecentlyJoinedTheatresCommand _getRecentlyJoinedTheatres;
        protected readonly IGetTheatreBaseInfoCommand _getTheatreBaseInfo;
        protected readonly UseCaseExecutor _executor;

        public TheatresController(IAddTheatreCommand addTheatre,
            IGetTheatresCommand getTheatres,
            IGetTheatreCommand getTheatre,
            IDeleteTheatreCommand deleteTheatre,
            IEditTheatreCommand editTheatre,
            IGetTheatresListCommand getTheatresList,
            IGetRecentlyJoinedTheatresCommand getRecentlyJoinedTheatres,
            IGetAllTheatresListCommand getAllTheatresList,
            IGetTheatreBaseInfoCommand getTheatreBaseInfo,
            UseCaseExecutor executor)
        {
            _addTheatre = addTheatre;
            _getTheatres = getTheatres;
            _getTheatre = getTheatre;
            _deleteTheatre = deleteTheatre;
            _editTheatre = editTheatre;
            _getTheatresList = getTheatresList;
            _getRecentlyJoinedTheatres = getRecentlyJoinedTheatres;
            _getAllTheatresList = getAllTheatresList;
            _getTheatreBaseInfo = getTheatreBaseInfo;
            _executor = executor;
        }

        // GET: api/Theatres
        [HttpGet]
        public IActionResult Get([FromQuery]TheatreQuery query)
       {
            if (query.Type == "getAllTheatresList")
            {
                var theatres = _executor.ExecuteQuery(_getAllTheatresList, new SearchQuery());
                return Ok(theatres);
            }
            if (query.Type == "getTheatresList")
            {
                var theatres = _executor.ExecuteQuery(_getTheatresList, new SearchQuery());
                return Ok(theatres);
            }
            if (query.Type == "recentlyJoinedTheatres")
            {
                var theatres = _executor.ExecuteQuery(_getRecentlyJoinedTheatres, new SearchQuery());
                return Ok(theatres);
            }
            var allTheatres = _executor.ExecuteQuery(_getTheatres, query);
            return Ok(allTheatres);
        }


        // GET: api/Theatres/5
        [HttpGet("{id}")]
        public IActionResult Get(int id, [FromQuery] TheatreQuery query)
        {
            if(query.Type == "baseInfo")
            {
                var theatreForEdit = _executor.ExecuteQuery(_getTheatreBaseInfo, id);
                return Ok(theatreForEdit);
            }
            var theatre = _executor.ExecuteQuery(_getTheatre, id);
            return Ok(theatre);
        }

        // POST: api/Theatres
        [HttpPost]
        [Authorize]
        public IActionResult Post([FromForm] TheatreDto dto)
        {
            _executor.ExecuteCommand(_addTheatre, dto);
            return Ok();
        }

        // PUT: api/Theatres/5
        [HttpPut("{id}")]
        [Authorize]
        public IActionResult Put(int id, [FromForm] TheatreDto dto)
        {
            dto.Id = id;
            _executor.ExecuteCommand(_editTheatre, dto);
            return StatusCode(204);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        [Authorize]
        public IActionResult Delete(int id)
        {
            _executor.ExecuteCommand(_deleteTheatre, id);
            return StatusCode(204);
        }
    }
}
