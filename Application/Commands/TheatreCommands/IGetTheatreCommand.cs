using Application.DTO.TheatreDto;
using Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.TheatreCommands
{
    public interface IGetTheatreCommand : IQuery<int, GetTheatreDto>
    {
    }
}
