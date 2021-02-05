using Application.DTO.PurchaseDto;
using Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.PurchaseCommands
{
    public interface IGetPurchaseCommand : IQuery<int, GetDetailedPurchaseDto>
    {
    }
}
