using Application.Commands.PurchaseCommands;
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

        public PagedResponses<GetPurchaseDto> Execute(PurchaseQuery request)
        {
            var purchase = Context.Purchases
                .Include(p => p.Repertoire)
                .ThenInclude(p => p.Show)
                .ThenInclude(p => p.Theatre)
                .Include(p => p.Sector)
                .ThenInclude(p => p.Scene)
                .Include(p => p.Sector)
                .ThenInclude(p => p.Prices)
                .Include(p => p.User)
                .Include(p => p.Repertoire)
                .ThenInclude(p => p.Show)
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
                ShowName = p.Repertoire.Show.Title,
                Date = p.Repertoire.Date,
                TheatreName = p.Repertoire.Show.Theatre.TheatreName,
                SceneName = p.Repertoire.Show.Scene.SceneName,
                SectorName = p.Sector.SectorName,
                RowNumber = p.RowNumber,
                SeatNumber = p.SeatNumber,
                Entrance = p.Entrance,
                UserName = p.User.FirstName + " " + p.User.LastName
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
                default:
                    data = data.OrderByDescending(p => p.Date);
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
