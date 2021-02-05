using Application.DTO.TheatreDto;
using Application.Interfaces;
using Application.Queries;
using Application.Responses;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.TheatreCommands
{
    public interface IGetTheatresCommand : IQuery<TheatreQuery, PagedResponses<GetTheatreDto>>
    {
    }
}
