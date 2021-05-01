using Application.Commands.ShowFollowerCommands;
using Application.DTO.ShowFollowerDto;
using Application.Queries;
using Application.UseCase;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShowFollowersController : ControllerBase
    {
        protected readonly IAddShowFollowerCommand _addShowFollower;
        protected readonly IDeleteShowFollowerCommand _deleteShowFollower;
        protected readonly IGetCountedShowFollowersFilteredByTheatreCommand _getCountedShowFollowersFilteredByTheatre;
        protected readonly UseCaseExecutor _executor;

        public ShowFollowersController(IAddShowFollowerCommand addShowFollower,
            IDeleteShowFollowerCommand deleteShowFollower, 
            IGetCountedShowFollowersFilteredByTheatreCommand getCountedShowFollowersFilteredByTheatre, 
            UseCaseExecutor executor)
        {
            _addShowFollower = addShowFollower;
            _deleteShowFollower = deleteShowFollower;
            _getCountedShowFollowersFilteredByTheatre = getCountedShowFollowersFilteredByTheatre;
            _executor = executor;
        }

        // GET: api/ShowFollowers
        [HttpGet]
        public IActionResult Get([FromQuery] ShowFollowerQuery query)
        {
            if(query.Type == "showFollowersFilteredByTheatre")
            {
                var followersNumber = _executor.ExecuteQuery(_getCountedShowFollowersFilteredByTheatre, query);
                return Ok(followersNumber);
            }
            return NotFound();
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
        public IActionResult Post([FromBody] ShowFollowerDto dto)
        {
            _executor.ExecuteCommand(_addShowFollower, dto);
            return StatusCode(204);
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
