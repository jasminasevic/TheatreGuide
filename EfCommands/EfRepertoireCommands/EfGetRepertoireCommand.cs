using Application.Commands.RepertoireCommands;
using Application.DTO.PriceDto;
using Application.DTO.RepertoireDto;
using Application.Exceptions;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfRepertoireCommands
{
    public class EfGetRepertoireCommand : EfBaseCommand, IGetRepertoireCommand
    {
        public EfGetRepertoireCommand(EfContext context) : base(context)
        {
        }

        public GetRepertoireDto Execute(int request)
        {
            var repertoire = Context.Repertoires
                .Include(s => s.Show)
                .ThenInclude(s => s.Theatre)
                .Include(s => s.Show)
                .ThenInclude(c => c.Category)
                .Include(s => s.Show)
                .ThenInclude(sc => sc.Scene)
                .Include(p => p.Prices)
                .ThenInclude(s => s.Sector)
                .Include(p => p.Prices)
                .ThenInclude(c => c.Currency)
                .Where(r => r.Id == request)
                .FirstOrDefault();

            if (repertoire == null)
                throw new EntityNotFoundException(request.ToString());

            return new GetRepertoireDto
            {
                Id = repertoire.Id,
                ShowId = repertoire.ShowId,
                ShowName = repertoire.Show.Title,
                TheatreId = repertoire.Show.TheatreId,
                TheatreName = repertoire.Show.Theatre.TheatreName,
                ShowDate = repertoire.Date,
                Category = repertoire.Show.Category.CategoryName,
                CategoryId = repertoire.Show.CategoryId,
                SceneId = repertoire.Show.SceneId,
                SceneName = repertoire.Show.Scene.SceneName,
                PremiereDate = repertoire.Show.PremiereDate,
                Description = repertoire.Show.ShowDescription,
                GetPriceDtos = repertoire.Prices.Select(p => new GetPriceDto
                {
                    SectorId = p.SectorId,
                    SectorName = p.Sector.SectorName,
                    Price = p.TicketPrice,
                    CurrencyId = p.CurrencyId,
                    CurrencyName = p.Currency.CurrencyName,
                    SeatCapacity = p.Sector.SeatCapacity,
                    RowsTotalNumber = p.Sector.RowsTotalNumber
                })
            };
        }
    }
}
