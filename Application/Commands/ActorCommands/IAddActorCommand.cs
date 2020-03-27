using Application.DTO.ActorDto;
using Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.ActorCommands
{
    public interface IAddActorCommand : ICommand<ActorDto>
    {
    }
}
