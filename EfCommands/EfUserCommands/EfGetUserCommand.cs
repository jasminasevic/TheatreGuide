using Application.Commands.UserCommands;
using Application.DTO.PriceDto;
using Application.DTO.PurchaseDto;
using Application.DTO.UserDto;
using Application.Exceptions;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfUserCommands
{
    public class EfGetUserCommand : EfBaseCommand, IGetUserCommand
    {
        public EfGetUserCommand(EfContext context) : base(context)
        {
        }

        public GetUserDto Execute(int request)
        {
            var user = Context.Users
                .Include(u => u.Role)
                .Include(u => u.Purchases)
                .ThenInclude(u => u.Repertoire)
                .ThenInclude(u => u.Show)
                .ThenInclude(u => u.Theatre)

                .Include(u => u.Purchases)
                .ThenInclude(u => u.Sector)
                .ThenInclude(u => u.Scene)

                .Include(u => u.Purchases)
                .ThenInclude(u => u.Sector)
                .ThenInclude(u => u.Prices)
                .ThenInclude(u => u.Currency)

                .Include(u => u.ShowFollowers)

                .Where(u => u.Id == request)
                .FirstOrDefault();

            if (user == null)
                throw new EntityNotFoundException(request.ToString());

            return new GetUserDto
            {
                Id = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                RoleId = user.RoleId,
                RoleName = user.Role.RoleName,
                GetDetailedPurchaseDtos = user.Purchases.Select(purchase => new GetDetailedPurchaseDto
                {
                    Id = purchase.Id,
                    ShowId = purchase.Repertoire.ShowId,
                    ShowName = purchase.Repertoire.Show.Title,
                    Date = purchase.Repertoire.Date,
                    TheatreId = purchase.Repertoire.Show.TheatreId,
                    TheatreName = purchase.Repertoire.Show.Theatre.TheatreName,
                    SceneId = purchase.Repertoire.Show.SceneId,
                    SceneName = purchase.Sector.Scene.SceneName,
                    SectorName = purchase.Sector.SectorName,
                    RowNumber = purchase.RowNumber,
                    SeatNumber = purchase.SeatNumber,
                    Entrance = purchase.Entrance,
                    PurchasedAt = purchase.CreatedAt,
                    GetPriceBasicDtos = purchase.Sector.Prices.Select(tp => new GetPriceBasicDto
                    {
                        Price = tp.TicketPrice,
                        CurrencyName = tp.Currency.CurrencyName
                    })
                }),
                ShowFollowing = user.ShowFollowers.Count()
            };
        }
    }
}
