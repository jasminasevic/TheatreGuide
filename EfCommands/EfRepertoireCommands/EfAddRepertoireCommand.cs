using Application.Commands.RepertoireCommands;
using Application.DTO.RepertoireDto;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfRepertoireCommands
{
    public class EfAddRepertoireCommand : EfBaseCommand, IAddRepertoireCommand
    {
        public EfAddRepertoireCommand(EfContext context) : base(context)
        {
        }

        public void Execute(RepertoireDto request)
        {
            if (Context.Repertoires.Any(r => r.ShowId == request.ShowId
                 && r.Date == request.ShowDate))
                throw new EntityAlreadyExistsException(request.ShowId.ToString());

            if (request.ShowId == 0)
                throw new Exception("Show is required");

            if (request.ShowDate == null)
                throw new Exception("Show Date is required");

            var showDate = Convert.ToDateTime(request.ShowDate);
            
            var repertoire = new Domain.Repertoire
            {
                ShowId = request.ShowId,
                Date = showDate,
                IsPremiere = request.IsPremiere
            };

            Context.Repertoires.Add(repertoire);

            foreach (var price in request.AddPriceDtos)
            {
                Context.Prices.Add(new Domain.Price
                {
                    Repertoire = repertoire,
                    SectorId = price.SectorId,
                    TicketPrice = price.TicketPrice,
                    CurrencyId = price.CurrencyId
                });

            };

            Context.SaveChanges();

        }
    }
}
