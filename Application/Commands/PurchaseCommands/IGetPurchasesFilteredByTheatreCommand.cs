using Application.DTO.PurchaseDto;
using Application.Interfaces;
using Application.Queries;
using Application.Responses;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.PurchaseCommands
{
    public interface IGetPurchasesFilteredByTheatreCommand : IQuery<PurchaseQuery, PagedResponses<GetPurchaseDto>>
    {
    }
}
