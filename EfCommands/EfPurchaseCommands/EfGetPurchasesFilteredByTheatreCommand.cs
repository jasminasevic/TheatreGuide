using Application.Commands.PurchaseCommands;
using Application.DTO.PriceDto;
using Application.DTO.PurchaseDto;
using Application.Exceptions;
using Application.Interfaces;
using Application.Queries;
using Application.Responses;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfPurchaseCommands
{
    public class EfGetPurchasesFilteredByTheatreCommand : EfBaseCommand, IGetPurchasesFilteredByTheatreCommand
    {
        public EfGetPurchasesFilteredByTheatreCommand(EfContext context) : base(context)
        {
        }

        public int Id => 94;

        public string Name => "Get Purchases Filtered by Theatre Using EF";

        public IEnumerable<Role> Roles => new List<Role> { Role.Theatre };

        public PagedResponses<GetPurchaseDto> Execute(PurchaseQuery request)
        {
            var purchase = Context.Purchases
                .Include(p => p.Repertoire)
                .ThenInclude(p => p.Show)
                .ThenInclude(p => p.Theatre)
                .Include(p => p.Sector)
                .ThenInclude(p => p.Prices)
                .ThenInclude(p => p.Currency)
                .Include(p => p.User)
                .Where(p => p.Repertoire.Show.TheatreId.ToString() == request.TheatreId)
                .AsQueryable();

            //Filtering logic
            if (request.ShowTitle != null)
                purchase = purchase.Where(p => p.Repertoire.Show.Title.ToLower()
                    .Contains(request.ShowTitle.ToLower()));

            if (request.SearchQuery != null)
                purchase = purchase.Where(p => p.Repertoire.Show.Title.ToLower()
                    .Contains(request.SearchQuery.ToLower()));

            if (purchase == null)
                throw new EntityNotFoundException(purchase.ToString());


            var data = purchase.Select(p => new GetPurchaseDto
            {
                Id = p.Id,
                RepertoireId = p.RepertoireId,
                ShowId = p.Repertoire.ShowId,
                ShowName = p.Repertoire.Show.Title,
                Date = p.Repertoire.Date,
                CreatedAt = p.CreatedAt,
                GetPriceBasicDtos = p.Sector.Prices.Select(tp => new GetPriceBasicDto
                {
                    Price = tp.TicketPrice,
                    CurrencyName = tp.Currency.CurrencyName
                }).Take(1),
                SectorName = p.Sector.SectorName,
                RowNumber = p.RowNumber,
                SeatNumber = p.SeatNumber
            });


            //Sorting logic
            var sortOrder = request.SortOrder;

            switch (sortOrder)
            {
                case "name_desc":
                    data = data.OrderByDescending(p => p.ShowName);
                    break;
                case "name_asc":
                    data = data.OrderBy(p => p.ShowName);
                    break;
                case "date_desc":
                    data = data.OrderByDescending(p => p.Date);
                    break;
                case "date_asc":
                    data = data.OrderBy(p => p.Date);
                    break;
                default:
                    data = data.OrderByDescending(p => p.CreatedAt);
                    break;
            }

            var totalCount = data.Count();

            data = data.Skip((request.PageNumber - 1) * request.PerPage).Take(request.PerPage);
            var pagesCount = (int)Math.Ceiling((double)totalCount / request.PerPage);

            return new PagedResponses<GetPurchaseDto>
            {
                PageNumber = request.PageNumber,
                PagesCount = pagesCount,
                TotalCount = totalCount,
                Data = data
            };

        }
    }
}
