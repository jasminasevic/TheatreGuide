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
    public class EfGetCountedPurchasesCommand : EfBaseCommand, IGetCountedPurchasesCommand
    {
        public EfGetCountedPurchasesCommand(EfContext context) : base(context)
        {
        }

        public int Id => 104;

        public string Name => "Get Total Number of Purchases Using EF";

        public IEnumerable<Role> Roles => new List<Role> { Role.Admin };

        public int Execute(PurchaseQuery search)
        {
            var purchases = Context.Purchases
                .Include(p => p.Repertoire)
                .Count();

            return purchases;
        }
    }
}
