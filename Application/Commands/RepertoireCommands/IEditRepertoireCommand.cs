using Application.DTO.RepertoireDto;
using Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.RepertoireCommands
{
    public interface IEditRepertoireCommand : ICommand<RepertoireDto>
    {
    }
}
