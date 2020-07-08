using Application.Commands.PurchaseCommands;
using Application.DTO.PurchaseDto;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCommands.EfPurchaseCommands
{
    public class EfEditPurchaseCommand : EfBaseCommand, IEditPurchaseCommand
    {
        public EfEditPurchaseCommand(EfContext context) : base(context)
        {
        }

        public void Execute(PurchaseDto request)
        {
            var purchase = Context.Purchases.Find(request.Id);

            if (purchase == null)
                throw new EntityNotFoundException(request.Id.ToString());

            purchase.RepertoireId = request.RepertoireId;
            purchase.UserId = request.UserId;
            purchase.SectorId = request.SectorId;
            purchase.SeatNumber = request.SeatNumber;
            purchase.RowNumber = request.RowNumber;
            purchase.Entrance = request.Entrance;
            purchase.ModifiedAt = DateTime.Now;

            Context.SaveChanges();

        }
    }
}
