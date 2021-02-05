using Application.DTO.ShowDto;
using Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.ShowCommands
{
    public interface IGetShowForRepertoireCommand : IQuery<int, GetShowForRepertoireDto>
    {
    }
}
