using Application.Commands.SectorCommands;
using Application.DTO.SeatDto;
using Application.DTO.SectorDto;
using Application.Exceptions;
using Application.Interfaces;
using Application.Queries;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfSectorCommands
{
    public class EfGetSectorWithUnavailableSeatsCommand : EfBaseCommand, IGetSectorWithUnavailableSeatsCommand
    {
        public EfGetSectorWithUnavailableSeatsCommand(EfContext context) : base(context)
        {
        }

        public int Id => 99;

        public string Name => "Get Sector With Unavailable Seats Using EF";

        public IEnumerable<Role> Roles => new List<Role> { Role.Theatre, Role.User };

        public GetSectorWithUnavailableSeatsDto Execute(SectorQuery query)
        {
            var sectors = Context.Sectors
                .Where(p => p.Id == query.SectorId)
                .FirstOrDefault();
                
            if (sectors == null)
                throw new EntityNotFoundException(sectors.ToString());

            var unavailableSeats = Context.Purchases
                .Where(p => p.RepertoireId == query.RepertoireId && p.SectorId == query.SectorId)
                .AsQueryable();


            return new GetSectorWithUnavailableSeatsDto
            {
                Id = sectors.Id,
                RowsTotalNumber = sectors.RowsTotalNumber,
                SeatCapacity = sectors.SeatCapacity,
                SectorName = sectors.SectorName,
                UnavailableSeatsDto = unavailableSeats.Select(us => new UnavailableSeatsDto
                {
                    RepertoireId = us.RepertoireId,
                    SectorId = us.SectorId,
                    RowNumber = us.RowNumber,
                    SeatNumber = us.SeatNumber
                })
            };

        }
    }
}
