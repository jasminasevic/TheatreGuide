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


        public GetDetailedPurchaseDto Execute(int request)
        {
            var purchase = Context.Purchases
                .Include(p => p.Repertoire)
                .ThenInclude(p => p.Show)
                .ThenInclude(p => p.Theatre)
                .Include(p => p.Sector)
                .ThenInclude(p => p.Scene)
                .Include(p => p.Sector)
                .ThenInclude(p => p.Prices)
                .ThenInclude(p => p.Currency)
                .Include(p => p.Repertoire)
                .ThenInclude(p => p.Show)
                .ThenInclude(p => p.Category)
                .Include(p => p.User)
                .Where(p => p.Id == request)
                .FirstOrDefault();

            if (purchase == null)
                throw new EntityNotFoundException(purchase.ToString());

            var priceDetails = Context.Prices.Where(s => s.RepertoireId == purchase.RepertoireId
                && s.SectorId == purchase.SectorId)
                .FirstOrDefault();

            var ticketPrice = priceDetails.TicketPrice;


            return new GetDetailedPurchaseDto
            {
                Id = purchase.Id,
                ShowId = purchase.Repertoire.ShowId,
                ShowName = purchase.Repertoire.Show.Title,
                Date = purchase.Repertoire.Date,
                TheatreId = purchase.Repertoire.Show.TheatreId,
                TheatreName = purchase.Repertoire.Show.Theatre.TheatreName,
                SceneId = purchase.Repertoire.Show.SceneId,
                SceneName = purchase.Sector.Scene.SceneName,
                SectorName = purchase.Sector.SectorName,
                RowNumber = purchase.RowNumber,
                SeatNumber = purchase.SeatNumber,
                Entrance = purchase.Entrance,
                CategoryId = purchase.Repertoire.Show.CategoryId,
                Category = purchase.Repertoire.Show.Category.CategoryName,
                UserId = purchase.UserId,
                UserName = purchase.User.FirstName + " " + purchase.User.LastName,
                PurchasedAt = purchase.CreatedAt,
                GetPriceBasicDtos = purchase.Sector.Prices.Select(tp => new GetPriceBasicDto
                {
                    Price = tp.TicketPrice,
                    CurrencyName = tp.Currency.CurrencyName
                })
            };
        }
    }
}
