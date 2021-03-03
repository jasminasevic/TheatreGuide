using Application.Commands.RegistrationCommands;
using Application.DTO.RegistrationDto;
using Application.UseCase;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterBusinessUserController : ControllerBase
    {
        private readonly IRegisterBusinessUserCommand _registerBusinessUser;
        protected readonly UseCaseExecutor _executor;

        public RegisterBusinessUserController(IRegisterBusinessUserCommand registerBusinessUser, 
            UseCaseExecutor executor)
        {
            _registerBusinessUser = registerBusinessUser;
            _executor = executor;
        }

        // POST api/<RegisterBusinessUserController>
        [HttpPost]
        public IActionResult Post([FromBody] RegisterBusinessUserDto dto)
        {
            _executor.ExecuteCommand(_registerBusinessUser, dto);
            return Ok();
        }

    }
}
