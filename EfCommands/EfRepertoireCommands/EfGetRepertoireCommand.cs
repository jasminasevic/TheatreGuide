using Application.Commands.RepertoireCommands;
using Application.DTO.ImageDto;
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

        public int Id => 33;

        public string Name => "Get Repertoire Using EF";

        public GetRepertoireDto Execute(int request)
        {
            var repertoire = Context.Repertoires
                .Include(s => s.Theatre)
                .Include(s => s.Show)
                .ThenInclude(c => c.Category)
                .Include(s => s.Show)
                .ThenInclude(sc => sc.Scene)
                .Include(p => p.Prices)
                .ThenInclude(s => s.Sector)
                .Include(p => p.Prices)
                .ThenInclude(c => c.Currency)
                .Include(p => p.Show)
                .ThenInclude(p => p.ShowImages)
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
                Category = repertoire.Show.Category.CategoryName,
                CategoryId = repertoire.Show.CategoryId,
                SceneId = repertoire.Show.SceneId,
                SceneName = repertoire.Show.Scene.SceneName,
                PremiereDate = repertoire.Show.PremiereDate,
                Duration = repertoire.Show.Duration,
                Description = repertoire.Show.ShowDescription,
                IsPremiere = repertoire.IsPremiere,
                GetPriceDtos = repertoire.Prices.Select(p => new GetPriceDto
                {
                    SectorId = p.SectorId,
                    SectorName = p.Sector.SectorName,
                    Price = p.TicketPrice,
                    CurrencyId = p.CurrencyId,
                    CurrencyName = p.Currency.CurrencyName,
                    SeatCapacity = p.Sector.SeatCapacity,
                    RowsTotalNumber = p.Sector.RowsTotalNumber
                }),
                GetImageDtos = repertoire.Show.ShowImages.Select(si => new GetImageDto
                {
                    Id = si.Id,
                    Alt = si.ShowImageAlt,
                    Path = "/uploads/show-images/" + si.ShowImagePath
                })
            };
        }
    }
}
