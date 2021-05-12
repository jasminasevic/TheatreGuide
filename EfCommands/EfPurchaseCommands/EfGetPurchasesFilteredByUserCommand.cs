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
    public class EfGetPurchasesFilteredByUserCommand : EfBaseCommand, IGetPurchasesFilteredByUserCommand
    {
        public EfGetPurchasesFilteredByUserCommand(EfContext context) : base(context)
        {
        }

        public int Id => 101;

        public string Name => "Get Purchases Filtered by User Using EF";

        public IEnumerable<Role> Roles => new List<Role> { Role.User };

        public PagedResponses<GetPurchaseDto> Execute(PurchaseQuery query)
        {
            var purchases = Context.Purchases
                .Include(p => p.Repertoire)
                .ThenInclude(p => p.Show)
                .ThenInclude(p => p.Theatre)
                .Include(p => p.Sector)
                .ThenInclude(p => p.Prices)
                .ThenInclude(p => p.Currency)
                .Include(p => p.User)
                .Where(p => p.UserId.ToString() == query.UserId)
                .AsQueryable();

            //Filtering logic
            if (query.ShowTitle != null)
                purchases = purchases.Where(p => p.Repertoire.Show.Title.ToLower()
                    .Contains(query.ShowTitle.ToLower()));

            if (query.SearchQuery != null)
                purchases = purchases.Where(p => p.Repertoire.Show.Title.ToLower()
                    .Contains(query.SearchQuery.ToLower()));

            if (purchases == null)
                throw new EntityNotFoundException(purchases.ToString());


            var data = purchases.Select(p => new GetPurchaseDto
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
            var sortOrder = query.SortOrder;

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

            data = data.Skip((query.PageNumber - 1) * query.PerPage).Take(query.PerPage);
            var pagesCount = (int)Math.Ceiling((double)totalCount / query.PerPage);

            return new PagedResponses<GetPurchaseDto>
            {
                PageNumber = query.PageNumber,
                PagesCount = pagesCount,
                TotalCount = totalCount,
                Data = data
            };
        }
    }
}
