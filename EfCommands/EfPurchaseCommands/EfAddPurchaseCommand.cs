using Application.Commands.PurchaseCommands;
using Application.DTO.PurchaseDto;
using Application.Exceptions;
using Application.Interfaces;
using Application.Validators.PurchaseValidators;
using EfDataAccess;
using FluentValidation;
using Microsoft.EntityFrameworkCore;
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

        public bool ContainsSensitiveData => false;

        public void Execute(AddPurchaseDto request)
        {
            _validator.ValidateAndThrow(request);

            foreach (var seat in request.AddSeatDtos)
            {

                if (Context.Purchases.Any(p => p.RepertoireId == request.RepertoireId
                     && p.SectorId == seat.SectorId
                     && p.RowNumber == seat.RowNumber
                     && p.SeatNumber == seat.SeatNumber))
                    throw new EntityAlreadyExistsException(seat.RowNumber.ToString()
                        + " " + seat.SeatNumber.ToString());

                //var sectorSoldTickets = Context.SectorSoldTickets.AsNoTracking()
                //    .FirstOrDefault(st => st.SectorId == seat.SectorId
                //        && st.RepertoireId == request.RepertoireId);

                //if (sectorSoldTickets != null)
                //    sectorSoldTickets.NumberOfSoldTickets += 1;

                //if (sectorSoldTickets == null)
                //    Context.SectorSoldTickets.Add(new Domain.SectorSoldTickets
                //    {
                //        RepertoireId = request.RepertoireId,
                //        SectorId = seat.SectorId,
                //        NumberOfSoldTickets = +1
                //    });

                //Context.SaveChangesAsync();
                //Context.Entry(sectorSoldTickets).State = EntityState.Detached;

                var purchase = new Domain.Purchase
                {
                    RepertoireId = request.RepertoireId,
                    UserId = request.UserId,
                    SectorId = seat.SectorId,
                    RowNumber = seat.RowNumber,
                    SeatNumber = seat.SeatNumber,
                    Entrance = seat.Entrance
                };

                Context.Purchases.Add(purchase);

            }
            Context.SaveChanges();
    
        }
    }
}
