using Application.DTO.SceneDto;
using Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.SceneCommands
{
    public interface IGetSceneCommand : IQuery<int, GetSceneDto>
    {
    }
}
