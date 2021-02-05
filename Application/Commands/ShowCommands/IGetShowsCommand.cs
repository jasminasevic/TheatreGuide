using Application.DTO.ShowDto;
using Application.Interfaces;
using Application.Queries;
using Application.Responses;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.ShowCommands
{
    public interface IGetShowsCommand : IQuery<ShowQuery, PagedResponses<GetShowDto>>
    {
    }
}
