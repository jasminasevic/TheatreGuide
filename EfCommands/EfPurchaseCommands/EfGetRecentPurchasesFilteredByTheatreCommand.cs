using Application.Commands.PurchaseCommands;
using Application.DTO.PurchaseDto;
using Application.Interfaces;
using Application.Queries;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfPurchaseCommands
{
    public class EfGetRecentPurchasesFilteredByTheatreCommand : EfBaseCommand, IGetRecentPurchasesFilteredByTheatreCommand
    {
        public EfGetRecentPurchasesFilteredByTheatreCommand(EfContext context) : base(context)
        {
        }

        public int Id => 98;

        public string Name => "Get Recent Purchases Filtered by Theatre Using EF";

        public IEnumerable<Role> Roles => new List<Role> { Role.Theatre };

        public bool ContainsSensitiveData => false;

        public IEnumerable<GetPurchaseBaseInfoDto> Execute(PurchaseQuery query)
        {
            var recentPurchases = Context.Purchases
                .Include(p => p.Repertoire)
                .ThenInclude(p => p.Show)
                .Where(p => p.Repertoire.TheatreId.ToString() == query.TheatreId)
                .AsQueryable();

            var data = recentPurchases.Select(p => new GetPurchaseBaseInfoDto
            {
                Id = p.Id,
                RepertoireId = p.RepertoireId,
                ShowName = p.Repertoire.Show.Title,
                Date = p.Repertoire.Date,
                CreatedAt = p.CreatedAt
            })
                .OrderByDescending(p => p.CreatedAt)
                .Take(5);

            return data;
        }
    }
}
