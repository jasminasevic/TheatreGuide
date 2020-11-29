using Application.Commands.PurchaseCommands;
using Application.DTO.PriceDto;
using Application.DTO.PurchaseDto;
using Application.Exceptions;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfPurchaseCommands
{
    public class EfGetPurchaseCommand : EfBaseCommand, IGetPurchaseCommand
    {
        public EfGetPurchaseCommand(EfContext context) : base(context)
        {
        }


        public GetPurchaseDto Execute(int request)
        {
            var purchase = Context.Purchases
                .Include(p => p.Repertoire)
                .ThenInclude(p => p.Show)
                .ThenInclude(p => p.Theatre)
                .Include(p => p.Sector)
                .ThenInclude(p => p.Scene)
                .Include(p => p.Sector)
                .ThenInclude(p => p.Prices)
                .Include(p => p.User)
                .Include(p => p.Repertoire)
                .ThenInclude(p => p.Prices)
                .Where(p => p.Id == request)
                .FirstOrDefault();

            if (purchase == null)
                throw new EntityNotFoundException(purchase.ToString());

            var priceDetails = Context.Prices.Where(s => s.RepertoireId == purchase.RepertoireId
                && s.SectorId == purchase.SectorId)
                .FirstOrDefault();

            var ticketPrice = priceDetails.TicketPrice;


            return new GetPurchaseDto
            {
                ShowName = purchase.Repertoire.Show.Title,
                Date = purchase.Repertoire.Date,
                TheatreName = purchase.Repertoire.Show.Theatre.TheatreName,
                SceneName = purchase.Sector.Scene.SceneName,
                SectorName = purchase.Sector.SectorName,
                RowNumber = purchase.RowNumber,
                SeatNumber = purchase.SeatNumber,
                Entrance = purchase.Entrance,
                UserName = purchase.User.FirstName + " " + purchase.User.LastName,
                Price = ticketPrice
            };
        }
    }
}
