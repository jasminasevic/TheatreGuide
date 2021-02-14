using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Commands.ShowFollowerCommands;
using Application.DTO.ShowFollowerDto;
using Application.Exceptions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShowFollowersController : ControllerBase
    {
        protected readonly IAddShowFollowerCommand _addShowFollower;
        protected readonly IDeleteShowFollowerCommand _deleteShowFollower;

        public ShowFollowersController(IAddShowFollowerCommand addShowFollower, 
            IDeleteShowFollowerCommand deleteShowFollower)
        {
            _addShowFollower = addShowFollower;
            _deleteShowFollower = deleteShowFollower;
        }

        // GET: api/ShowFollowers
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/ShowFollowers/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/ShowFollowers
        [HttpPost]
        [Authorize]
        public IActionResult Post([FromForm] ShowFollowerDto dto)
        {
            try
            {
                _addShowFollower.Execute(dto);
                return StatusCode(204);
            }
            catch(EntityAlreadyExistsException e)
            {
                return StatusCode(422, e.Message);
            }
        }

        // PUT: api/ShowFollowers/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{userId}/{showId}")]
        [Authorize]
        public IActionResult Delete(int userId, int showId)
        {
            try
            {
                _deleteShowFollower.Execute(userId, showId);
                return StatusCode(204);
            }
            catch(Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }
    }
}
