using Application.DTO.DirectorDto;
using Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.DirectorCommands
{
    public interface IEditDirectorCommand : ICommand<DirectorDto>
    {
    }
}
