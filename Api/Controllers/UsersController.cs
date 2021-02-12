using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Commands.UserCommands;
using Application.UseCase;
using Application.DTO.UserDto;
using Application.Exceptions;
using Application.Queries;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        protected readonly IAddUserCommand _addUser;
        protected readonly IGetUsersCommand _getUsers;
        protected readonly IGetUserCommand _getUser;
        protected readonly IEditUserCommand _editUser;
        protected readonly IDeleteUserCommand _deleteUser;
        protected readonly UseCaseExecutor _executor;

        public UsersController(IAddUserCommand addUser,
            IGetUsersCommand getUsers,
            IGetUserCommand getUser,
            IEditUserCommand editUser,
            IDeleteUserCommand deleteUser, 
            UseCaseExecutor executor)
        {
            _addUser = addUser;
            _getUsers = getUsers;
            _getUser = getUser;
            _editUser = editUser;
            _deleteUser = deleteUser;
            _executor = executor;
        }

        // GET: api/Users
        [HttpGet]
        public IActionResult Get([FromQuery]UserQuery query)
        {
            var users = _executor.ExecuteQuery(_getUsers, query);
            return Ok(users);
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var user = _executor.ExecuteQuery(_getUser, id);
            return Ok(user);
        }

        // POST: api/users
        [HttpPost]
        public IActionResult Post([FromBody] UserDto dto)
        {
            _executor.ExecuteCommand(_addUser, dto);
            return Ok();
        }

        // PUT: api/Users/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] UserDto dto)
        {
            dto.Id = id;
            _executor.ExecuteCommand(_editUser, dto);
            return StatusCode(204);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _executor.ExecuteCommand(_deleteUser, id);
            return StatusCode(204);
        }
    }
}
