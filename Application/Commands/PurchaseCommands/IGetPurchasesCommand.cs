using Application.DTO.PurchaseDto;
using Application.Interfaces;
using Application.Queries;
using Application.Responses;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.PurchaseCommands
{
    public interface IGetPurchasesCommand : IQuery<PurchaseQuery, PagedResponses<GetPurchaseDto>>
    {
    }
}
