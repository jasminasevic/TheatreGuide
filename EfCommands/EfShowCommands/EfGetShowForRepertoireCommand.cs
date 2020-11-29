using Application.Commands.ShowCommands;
using Application.DTO.SectorDto;
using Application.DTO.ShowDto;
using Application.Exceptions;
using Application.Interfaces;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfShowCommands
{
    public class EfGetShowForRepertoireCommand : EfBaseCommand, IGetShowForRepertoireCommand
    {
        public EfGetShowForRepertoireCommand(EfContext context) : base(context)
        {
        }

        public GetShowForRepertoireDto Execute(int request)
        {
            var show = Context.Shows
                .Include(s => s.Theatre)
                .Include(s => s.Scene)
                .ThenInclude(s => s.Sectors)
                .Where(s => s.Id == request)
                .FirstOrDefault();

            if (show == null)
                throw new EntityNotFoundException(request.ToString());

            return new GetShowForRepertoireDto
            {
                Id = show.Id,
                Title = show.Title,
                Theatre = show.Theatre.TheatreName,
                Scene = show.Scene.SceneName,
                GetSectorDtos = show.Scene.Sectors.Select(s => new GetSectorDto
                {
                    Id = s.Id,
                    SectorName = s.SectorName,
                    RowsTotalNumber = s.RowsTotalNumber,
                    SeatCapacity = s.SeatCapacity
                })
            };
        }
    }
}
