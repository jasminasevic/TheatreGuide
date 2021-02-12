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
    public class RegisterUserController : ControllerBase
    {
        private readonly IRegisterUserCommand _registerUser;
        protected readonly UseCaseExecutor _executor;

        public RegisterUserController(IRegisterUserCommand registerUser, 
            UseCaseExecutor executor)
        {
            _registerUser = registerUser;
            _executor = executor;
        }

        // POST api/RegisterUser
        [HttpPost]
        public IActionResult Post([FromBody] RegisterUserDto dto)
        {
            _executor.ExecuteCommand(_registerUser, dto);
            return Ok();
        }
    }
}
