using Application.DTO.RepertoireDto;
using Application.Interfaces;
using Application.Queries;
using Application.Responses;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.RepertoireCommands
{
    public interface IGetRepertoiresCommand : ICommand<RepertoireQuery, PagedResponses<GetRepertoireDto>>
    {
    }
}
