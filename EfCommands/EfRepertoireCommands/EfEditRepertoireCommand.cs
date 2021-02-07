using Application.Commands.RepertoireCommands;
using Application.DTO.RepertoireDto;
using Application.Exceptions;
using Application.Interfaces;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfRepertoireCommands
{
    public class EfEditRepertoireCommand : EfBaseCommand, IEditRepertoireCommand
    {
        public EfEditRepertoireCommand(EfContext context) : base(context)
        {
        }

        public int Id => 32;

        public string Name => "Edit Repertoire Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin, Role.Theatre };

        public void Execute(RepertoireDto request)
        {
            var repertoire = Context.Repertoires.Find(request.Id);

            if (repertoire == null)
                throw new EntityNotFoundException(request.Id.ToString());

            repertoire.ShowId = request.ShowId;
            repertoire.TheatreId = request.TheatreId;
            repertoire.Date = request.ShowDate;
            repertoire.ModifiedAt = DateTime.Now;
            repertoire.IsPremiere = request.IsPremiere;


            foreach (var ticketPrice in Context.Prices.Where(s => s.RepertoireId == request.Id))
            {
                Context.Prices.Remove(ticketPrice);
            }

            foreach (var price in request.AddPriceDtos)
            {
                Context.Prices.Add(new Domain.Price
                {
                    RepertoireId = request.Id,
                    SectorId = price.SectorId,
                    TicketPrice = price.TicketPrice,
                    CurrencyId = price.CurrencyId
                });
            };

            Context.SaveChanges();
        }

    }
}
