using Application.DTO.SceneDto;
using Application.Interfaces;
using Application.Queries;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.SceneCommands
{
    public interface IGetScenesListCommand : ICommand<SearchQuery, IEnumerable<GetScenesBasicDto>>
    {
    }
}
