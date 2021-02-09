using Application.Commands.PurchaseCommands;
using Application.DTO.PurchaseDto;
using Application.Exceptions;
using Application.Interfaces;
using Application.Validators.PurchaseValidators;
using EfDataAccess;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCommands.EfPurchaseCommands
{
    public class EfEditPurchaseCommand : EfBaseCommand, IEditPurchaseCommand
    {
        protected readonly PurchaseValidator _validator;
        public EfEditPurchaseCommand(EfContext context, PurchaseValidator validator) 
            : base(context)
        {
            _validator = validator;
        }

        public int Id => 27;

        public string Name => "Edit Purchase Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { };

        public void Execute(PurchaseDto request)
        {
            _validator.ValidateAndThrow(request);

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
