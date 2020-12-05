using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Commands.RoleCommands;
using Application.DTO.RoleDto;
using Application.Exceptions;
using Application.Queries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolesController : ControllerBase
    {
        private readonly IAddRoleCommand _addRole;
        private readonly IGetRolesCommand _getRoles;
        private readonly IGetRoleCommand _getRole;
        private readonly IEditRoleCommand _editRole;
        private readonly IDeleteRoleCommand _deleteRole;
        private readonly IGetRolesListCommand _getRolesList;

        public RolesController(IAddRoleCommand addRole,
            IGetRolesCommand getRoles,
            IGetRoleCommand getRole,
            IEditRoleCommand editRole,
            IDeleteRoleCommand deleteRole, 
            IGetRolesListCommand getRolesList)
        {
            _addRole = addRole;
            _getRoles = getRoles;
            _getRole = getRole;
            _editRole = editRole;
            _deleteRole = deleteRole;
            _getRolesList = getRolesList;
        }

        // GET: api/Roles
        [HttpGet]
        public IActionResult Get([FromQuery] RoleQuery query)
        {
            try
            {
                if (query.SearchQuery == null && query.PageNumber == 0 && query.PerPage == 0)
                {
                    var rolesList = _getRolesList.Execute(new SearchQuery());
                    return Ok(rolesList);
                }
                var roles = _getRoles.Execute(query);
                return Ok(roles);
            }
            catch (EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // GET: api/Roles/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                var role = _getRole.Execute(id);
                return Ok(role);
            }
            catch (EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // POST: api/Roles
        [HttpPost]
        public IActionResult Post([FromBody] RoleDto dto)
        {
            try
            {
                _addRole.Execute(dto);
                return StatusCode(200);
            }
            catch(EntityAlreadyExistsException e)
            {
                return StatusCode(422, e.Message);
            }
        }

        // PUT: api/Roles/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] RoleDto dto)
        {
            try
            {
                dto.Id = id;
                _editRole.Execute(dto);
                return StatusCode(204);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e);
            }
            catch (EntityAlreadyExistsException e)
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
                _deleteRole.Execute(id);
                return StatusCode(204);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }
    }
}
