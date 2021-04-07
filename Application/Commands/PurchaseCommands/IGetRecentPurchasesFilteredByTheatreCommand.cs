using Application.DTO.PurchaseDto;
using Application.Interfaces;
using Application.Queries;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.PurchaseCommands
{
    public interface IGetRecentPurchasesFilteredByTheatreCommand : IQuery<PurchaseQuery, IEnumerable<GetPurchaseBaseInfoDto>>
    {
    }
}
