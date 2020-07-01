﻿using Application.Commands.RepertoireCommands;
using Application.DTO.RepertoireDto;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfRepertoireCommands
{
    public class EfAddRepertoireCommand : EfBaseCommand, IAddRepertoireCommand
    {
        public EfAddRepertoireCommand(EfContext context) : base(context)
        {
        }

        public void Execute(RepertoireDto request)
        {
            if (Context.Repertoires.Any(r => r.ShowId == request.ShowId
                 && r.TheatreId == request.TheatreId
                 && r.SceneId == request.SceneId
                 && r.Date == request.ShowDate))
                throw new EntityAlreadyExistsException(request.ShowId.ToString());

            if (request.ShowId == 0)
                throw new Exception("Show is required");

            if (request.SceneId == 0)
                throw new Exception("Scene is required");

            if (request.TheatreId == 0)
                throw new Exception("Theatre is required");

            if (request.ShowDate == null)
                throw new Exception("Show Date is required");

            
            var repertoire = new Domain.Repertoire
            {
                ShowId = request.ShowId,
                TheatreId = request.TheatreId,
                SceneId = request.SceneId,
                Date = request.ShowDate,
            };

            Context.Repertoires.Add(repertoire);

            foreach(var price in request.AddPriceDtos)
            {
                Context.Prices.Add(new Domain.Price
                {
                    Repertoire = repertoire,
                    SectorId = price.SectorId,
                    TicketPrice = price.TicketPrice
                });

            };

            Context.SaveChanges();

        }
    }
}