using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Commands.UserCommands;
using Application.DTO.UserDto;
using Application.Exceptions;
using Application.Queries;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    
    [EnableCors]
    //[EnableCors("CorsPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        protected readonly IAddUserCommand _addUser;
        protected readonly IGetUsersCommand _getUsers;
        protected readonly IGetUserCommand _getUser;
        protected readonly IEditUserCommand _editUser;
        protected readonly IDeleteUserCommand _deleteUser;

        public UsersController(IAddUserCommand addUser,
            IGetUsersCommand getUsers,
            IGetUserCommand getUser,
            IEditUserCommand editUser, 
            IDeleteUserCommand deleteUser)
        {
            _addUser = addUser;
            _getUsers = getUsers;
            _getUser = getUser;
            _editUser = editUser;
            _deleteUser = deleteUser;
        }

        // GET: api/Users
        [HttpGet]
        public IActionResult Get([FromQuery]UserQuery query)
        {
            try
            {
                var users = _getUsers.Execute(query);
                return Ok(users);
            }
            catch (EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                var user = _getUser.Execute(id);
                return Ok(user);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // POST: api/users
        [HttpOptions]
        [HttpPost]
        //[HttpPost, Produces("application/json")]
        //[HttpOptions]
        public IActionResult Post([FromBody] UserDto dto)
        {
            try
            {
                _addUser.Execute(dto);
                return Ok();
            }
            catch (EntityAlreadyExistsException e)
            {
                return StatusCode(422, e.Message);
            }
        }

        // PUT: api/Users/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] UserDto dto)
        {
            try
            {
                dto.Id = id;
                _editUser.Execute(dto);
                return StatusCode(204);
            }
            catch (EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
            catch(EntityAlreadyExistsException e)
            {
                return StatusCode(422, e.Message);
            }
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _deleteUser.Execute(id);
                return StatusCode(204);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }
    }
}
