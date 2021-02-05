using Application.Commands.PurchaseCommands;
using Application.DTO.PriceDto;
using Application.DTO.PurchaseDto;
using Application.Exceptions;
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
    public class EfGetPurchasesCommand : EfBaseCommand, IGetPurchasesCommand
    {
        public EfGetPurchasesCommand(EfContext context) : base(context)
        {
        }

        public int Id => 29;

        public string Name => "Get Purchases Using EF";

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
                ShowName = p.Repertoire.Show.Title,
                Date = p.Repertoire.Date,
                TheatreName = p.Repertoire.Show.Theatre.TheatreName,
                UserName = p.User.FirstName + " " + p.User.LastName,
                CreatedAt = p.CreatedAt,
                GetPriceBasicDtos = p.Sector.Prices.Select(tp => new GetPriceBasicDto
                {
                    Price = tp.TicketPrice,
                    CurrencyName = tp.Currency.CurrencyName
                })
            });


            //Sorting logic
            var sortOrder = request.SortOrder;

            switch (sortOrder)
            {
                case "showTitle_desc":
                    data = data.OrderByDescending(p => p.ShowName);
                    break;
                case "showTitle_asc":
                    data = data.OrderBy(p => p.ShowName);
                    break;
                case "date_desc":
                    data = data.OrderByDescending(p => p.Date);
                    break;
                case "date_asc":
                    data = data.OrderBy(p => p.Date);
                    break;
                case "theatre_desc":
                    data = data.OrderByDescending(p => p.TheatreName);
                    break;
                case "theatre_asc":
                    data = data.OrderBy(p => p.TheatreName);
                    break;
                case "user_desc":
                    data = data.OrderByDescending(p => p.UserName);
                    break;
                case "user_asc":
                    data = data.OrderBy(p => p.UserName);
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
