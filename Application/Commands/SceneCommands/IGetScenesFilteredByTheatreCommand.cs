using Application.DTO.SceneDto;
using Application.Interfaces;
using Application.Queries;
using Application.Responses;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.SceneCommands
{
    public interface IGetScenesFilteredByTheatreCommand : IQuery<SceneQuery, PagedResponses<GetScenesBasicDto>>
    {
    }
}
