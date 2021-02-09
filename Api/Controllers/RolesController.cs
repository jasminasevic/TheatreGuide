using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Commands.RoleCommands;
using Application.Core;
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
        private readonly UseCaseExecutor _executor;

        public RolesController(IAddRoleCommand addRole,
            IGetRolesCommand getRoles,
            IGetRoleCommand getRole,
            IEditRoleCommand editRole,
            IDeleteRoleCommand deleteRole,
            IGetRolesListCommand getRolesList, 
            UseCaseExecutor executor)
        {
            _addRole = addRole;
            _getRoles = getRoles;
            _getRole = getRole;
            _editRole = editRole;
            _deleteRole = deleteRole;
            _getRolesList = getRolesList;
            _executor = executor;
        }

        // GET: api/Roles
        [HttpGet]
        public IActionResult Get([FromQuery] RoleQuery query)
        {
            if (query.SearchQuery == null && query.PageNumber == 0 && query.PerPage == 0)
            {
                var rolesList = _executor.ExecuteQuery(_getRolesList, new SearchQuery());
                return Ok(rolesList);
            }
            var roles = _executor.ExecuteQuery(_getRoles, query);
            return Ok(roles);
        }

        // GET: api/Roles/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var role = _executor.ExecuteQuery(_getRole, id);
            return Ok(role);
        }

        // POST: api/Roles
        [HttpPost]
        public IActionResult Post([FromBody] RoleDto dto)
        {
            _executor.ExecuteCommand(_addRole, dto);
            return StatusCode(200);
        }

        // PUT: api/Roles/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] RoleDto dto)
        {
            dto.Id = id;
            _executor.ExecuteCommand(_editRole, dto);
            return StatusCode(204);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _executor.ExecuteCommand(_deleteRole, id);
            return StatusCode(204);
        }
    }
}
