﻿using Application.Commands.RepertoireCommands;
using Application.DTO.PriceDto;
using Application.DTO.RepertoireDto;
using Application.Exceptions;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfRepertoireCommands
{
    public class EfGetRepertoireCommand : EfBaseCommand, IGetRepertoireCommand
    {
        public EfGetRepertoireCommand(EfContext context) : base(context)
        {
        }

        public GetRepertoireDto Execute(int request)
        {
            var repertoire = Context.Repertoires
                .Include(r => r.Theatre)
                .Include(s => s.Show)
                .Where(r => r.Id == request)
                .FirstOrDefault();

            if (repertoire == null)
                throw new EntityNotFoundException(request.ToString());

            return new GetRepertoireDto
            {
                Id = repertoire.Id,
                ShowId = repertoire.ShowId,
                ShowName = repertoire.Show.Title,
                TheatreId = repertoire.TheatreId,
                TheatreName = repertoire.Theatre.TheatreName,
                ShowDate = repertoire.Date,
                SoldTicketsNumber = repertoire.NumberOfSoldTickets
            };

        }
    }
}
