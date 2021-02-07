using Application.Commands.PurchaseCommands;
using Application.Exceptions;
using Application.Interfaces;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfPurchaseCommands
{
    public class EfDeletePurchaseCommand : EfBaseCommand, IDeletePurchaseCommand
    {
        public EfDeletePurchaseCommand(EfContext context) : base(context)
        {
        }

        public int Id => 26;

        public string Name => "Delete Purchase Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { };

        public void Execute(int request)
        {
            var purchase = Context.Purchases
                .Include(p => p.Sector)
                .ThenInclude(p => p.Prices)
                .Where(p => p.Id == request)
                .FirstOrDefault();

            if (purchase == null)
                throw new EntityNotFoundException(request.ToString());

            
            var sectorSoldTickets = Context.SectorSoldTickets
                .Where(st => st.SectorId == purchase.SectorId
                    && st.RepertoireId == purchase.RepertoireId)
                .FirstOrDefault();

            if (sectorSoldTickets != null)
                sectorSoldTickets.NumberOfSoldTickets -= 1;

            Context.Purchases.Remove(purchase);
            Context.SaveChanges();

        }
    }
}
