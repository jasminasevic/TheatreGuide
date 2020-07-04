using Application.DTO.ShowFollowerDto;
using Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.ShowFollowerCommands
{
    public interface IAddShowFollowerCommand : ICommand<ShowFollowerDto>
    {
    }
}
