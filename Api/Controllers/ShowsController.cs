﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Commands.ShowCommands;
using Application.DTO.ShowDto;
using Application.Exceptions;
using Application.Queries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShowsController : ControllerBase
    {
        protected readonly IAddShowCommand _addShow;
        protected readonly IGetShowCommand _getShow;
        protected readonly IGetShowsCommand _getShows;
        protected readonly IDeleteShowCommand _deleteShow;
        protected readonly IEditShowCommand _editShow;

        public ShowsController(IAddShowCommand addShow,
            IGetShowCommand getShow,
            IGetShowsCommand getShows,
            IDeleteShowCommand deleteShow, 
            IEditShowCommand editShow)
        {
            _addShow = addShow;
            _getShow = getShow;
            _getShows = getShows;
            _deleteShow = deleteShow;
            _editShow = editShow;
        }

        // GET: api/Shows
        [HttpGet]
        public IActionResult Get([FromQuery] ShowQuery query)
        {
            try
            {
                var shows =_getShows.Execute(query);
                return Ok(shows);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // GET: api/Shows/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                var show = _getShow.Execute(id);
                return Ok(show);
            }
            catch (EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // POST: api/Shows
        [HttpPost]
        public IActionResult Post([FromForm] ShowDto dto)
        {
            try
            {
                _addShow.Execute(dto);
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

        // PUT: api/Shows/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromForm] ShowDto dto)
        {
            try
            {
                dto.Id = id;
                _editShow.Execute(dto);
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
                _deleteShow.Execute(id);
                return StatusCode(204);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }
    }
}