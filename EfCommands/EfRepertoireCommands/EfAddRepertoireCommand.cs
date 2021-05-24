using Application.Commands.RepertoireCommands;
using Application.DTO.RepertoireDto;
using Application.Exceptions;
using Application.Interfaces;
using Application.Validators.RepertoireValidators;
using EfDataAccess;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfRepertoireCommands
{
    public class EfAddRepertoireCommand : EfBaseCommand, IAddRepertoireCommand
    {
        protected readonly RepertoireValidator _validator;
        public EfAddRepertoireCommand(EfContext context, RepertoireValidator validator) 
            : base(context)
        {
            _validator = validator;
        }

        public int Id => 30;

        public string Name => "Add New Repertoire Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin, Role.Theatre };

        public bool ContainsSensitiveData => false;

        public void Execute(RepertoireDto request)
        {
            _validator.ValidateAndThrow(request);

            if (Context.Repertoires.Any(r => r.ShowId == request.ShowId
                 && r.Date == request.ShowDate))
                throw new EntityAlreadyExistsException("Selected repertoire");

            var showDate = Convert.ToDateTime(request.ShowDate);
            
            var repertoire = new Domain.Repertoire
            {
                ShowId = request.ShowId,
                TheatreId = request.TheatreId,
                Date = showDate,
                IsPremiere = request.IsPremiere
            };

            Context.Repertoires.Add(repertoire);

            foreach (var price in request.AddPriceDtos)
            {
                Context.Prices.Add(new Domain.Price
                {
                    Repertoire = repertoire,
                    SectorId = price.SectorId,
                    TicketPrice = price.TicketPrice,
                    CurrencyId = price.CurrencyId
                });

            };

            Context.SaveChanges();

        }
    }
}
