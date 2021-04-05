using Application.Interfaces;
using Application.Queries;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.PurchaseCommands
{
    public interface IGetCountedPurchasesFilteredByTheatreCommand : IQuery<PurchaseQuery, int>
    {
    }
}
