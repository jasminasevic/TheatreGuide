using Application.Commands.SubsceneCommands;
using Application.DTO.SubsceneDto;
using Application.Exceptions;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfSubsceneCommands
{
    public class EfGetSubsceneCommand : EfBaseCommand, IGetSubsceneCommand
    {
        public EfGetSubsceneCommand(EfContext context) : base(context)
        {
        }

        public GetSubsceneDto Execute(int request)
        {
            var subscene = Context.Subscenes
                .Include(s => s.SubsceneCategory)
                .Include(s => s.Scene)
                .ThenInclude(s => s.Theatre)
                .Where(s => s.Id == request)
                .FirstOrDefault();

            if (subscene == null)
                throw new EntityNotFoundException(request.ToString());

            return new GetSubsceneDto
            {
                Id = subscene.Id,
                TheatreName = subscene.Scene.Theatre.TheatreName,
                SceneName = subscene.Scene.SceneName,
                SubsceneCategoryName = subscene.SubsceneCategory.SubsceneCategoryName,
                RowsTotalNumber = subscene.RowsTotalNumber,
                SeatCapacity = subscene.SeatCapacity
            };
        }

    }
}
