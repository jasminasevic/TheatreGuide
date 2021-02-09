using Application.Commands.PurchaseCommands;
using Application.DTO.PurchaseDto;
using Application.Exceptions;
using Application.Interfaces;
using Application.Validators.PurchaseValidators;
using EfDataAccess;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfPurchaseCommands
{
    public class EfAddPurchaseCommand : EfBaseCommand, IAddPurchaseCommand
    {
        protected readonly PurchaseValidator _validator;

        public EfAddPurchaseCommand(EfContext context, PurchaseValidator validator) 
            : base(context)
        {
            _validator = validator;
        }

        public int Id => 25;

        public string Name => "Add New Purchase Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.User, Role.Admin };

        public void Execute(PurchaseDto request)
        {
            _validator.ValidateAndThrow(request);

            if (Context.Purchases.Any(p => p.RepertoireId == request.RepertoireId
                 && p.SectorId == request.SectorId
                 && p.RowNumber == request.RowNumber
                 && p.SeatNumber == request.SeatNumber))
                throw new EntityAlreadyExistsException(request.RowNumber.ToString() 
                    + " " + request.SeatNumber.ToString());

            var sectorSoldTickets = Context.SectorSoldTickets
                .Where(st => st.SectorId == request.SectorId
                    && st.RepertoireId == request.RepertoireId)
                .FirstOrDefault();

            if (sectorSoldTickets != null)
                sectorSoldTickets.NumberOfSoldTickets += 1;

            if (sectorSoldTickets == null)
                Context.SectorSoldTickets.Add(new Domain.SectorSoldTickets
                {
                    RepertoireId = request.RepertoireId,
                    SectorId = request.SectorId,
                    NumberOfSoldTickets = +1
                });
                    
            var purchase = new Domain.Purchase
            {
                RepertoireId = request.RepertoireId,
                SectorId = request.SectorId,
                UserId = request.UserId,
                RowNumber = request.RowNumber,
                SeatNumber = request.SeatNumber,
                Entrance = request.Entrance
            };

            Context.Purchases.Add(purchase);

            Context.SaveChanges();
    
        }
    }
}
