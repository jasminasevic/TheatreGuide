using Application.Commands.PurchaseCommands;
using Application.Interfaces;
using Application.Queries;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfPurchaseCommands
{
    public class EfGetCountedPurchasesFilteredByTheatreCommand : EfBaseCommand, IGetCountedPurchasesFilteredByTheatreCommand
    {
        public EfGetCountedPurchasesFilteredByTheatreCommand(EfContext context) : base(context)
        {
        }

        public int Id => 97;

        public string Name => "Get Total Number of Purchases Filtered by Theatre Using EF";

        public IEnumerable<Role> Roles => new List<Role> { Role.Theatre };

        public bool ContainsSensitiveData => false;

        public int Execute(PurchaseQuery query)
        {
            var purchases = Context.Purchases
                .Include(p => p.Repertoire)
                .Where(p => p.Repertoire.TheatreId.ToString() == query.TheatreId)
                .Count();

            return purchases;
        }
    }
}
