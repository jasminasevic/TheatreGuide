using Application.DTO.SectorDto;
using Application.Interfaces;
using Application.Queries;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.SectorCommands
{
    public interface IGetSectorWithUnavailableSeatsCommand : IQuery<SectorQuery, GetSectorWithUnavailableSeatsDto>
    {
    }
}
