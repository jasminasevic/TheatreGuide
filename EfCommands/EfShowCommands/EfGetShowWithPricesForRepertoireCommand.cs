using Application.Commands.ShowCommands;
using Application.DTO.PriceDto;
using Application.DTO.SectorDto;
using Application.DTO.ShowDto;
using Application.Exceptions;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfShowCommands
{
    public class EfGetShowWithPricesForRepertoireCommand : EfBaseCommand, IGetShowWithPricesForRepertoireCommand
    {
        public EfGetShowWithPricesForRepertoireCommand(EfContext context) : base(context)
        {
        }

        public int Id => 64;

        public string Name => "Get Shows with Prices for Repertoire Using EF";

        public GetShowWithPriceForRepertoireDto Execute(int request)
        {
            var show = Context.Shows
                .Include(s => s.Theatre)
                .Include(s => s.Scene)
                .ThenInclude(s => s.Sectors)
                .ThenInclude(p => p.Prices)
                .ThenInclude(r => r.Repertoire)
                .Where(s => s.Id == request)
                .FirstOrDefault();

            if (show == null)
                throw new EntityNotFoundException(request.ToString());

            return new GetShowWithPriceForRepertoireDto
            {
                Id = show.Id,
                Title = show.Title,
                TheatreId = show.TheatreId,
                Theatre = show.Theatre.TheatreName,
                Scene = show.Scene.SceneName,
                GetSectorWithPriceDtos = show.Scene.Sectors.Select(s => new GetSectorWithPriceDto
                {
                    SectorId = s.Id,
                    SectorName = s.SectorName,
                    GetPriceBasicDtos = s.Prices.Select(p => new GetPriceBasicDto
                    {
                        Price = p.TicketPrice
                    })
                })

            };
        }
    }
}
