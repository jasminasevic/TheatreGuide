using Application.Commands.RepertoireCommands;
using Application.DTO.PriceDto;
using Application.DTO.RepertoireDto;
using Application.Exceptions;
using Application.Interfaces;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfRepertoireCommands
{
    public class EfGetRepertoireForEditCommand : EfBaseCommand, IGetRepertoireForEditCommand
    {
        public EfGetRepertoireForEditCommand(EfContext context) : base(context)
        {
        }

        public int Id => 93;

        public string Name => "Get Repertoire for Edit Using EF";

        public IEnumerable<Role> Roles => new List<Role> { Role.Theatre };

        public GetRepertoireForEditDto Execute(int search)
        {
            var repertoire = Context.Repertoires
                .Include(s => s.Theatre)
                .Include(s => s.Show)
                .ThenInclude(sc => sc.Scene)
                .Include(p => p.Prices)
                .ThenInclude(s => s.Sector)
                .Include(p => p.Prices)
                .ThenInclude(c => c.Currency)
                .Where(r => r.Id == search)
                .FirstOrDefault();

            if (repertoire == null)
                throw new EntityNotFoundException(search.ToString());

            return new GetRepertoireForEditDto
            {
                Id = repertoire.Id,
                ShowId = repertoire.ShowId,
                ShowName = repertoire.Show.Title,
                ShowDate = repertoire.Date,
                IsPremiere = repertoire.IsPremiere,
                SceneName = repertoire.Show.Scene.SceneName,
                TheatreId = repertoire.TheatreId,
                GetPriceDtos = repertoire.Prices.Select(p => new GetPriceDto
                {
                    SectorId = p.SectorId,
                    SectorName = p.Sector.SectorName,
                    Price = p.TicketPrice,
                    CurrencyId = p.CurrencyId,
                    CurrencyName = p.Currency.CurrencyName,
                }),
            };
        }
    }
}
