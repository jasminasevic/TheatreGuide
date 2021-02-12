using Application.DTO.RegistrationDto;
using Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.RegistrationCommands
{
    public interface IRegisterUserCommand : ICommand<RegisterUserDto>
    {
    }
}
