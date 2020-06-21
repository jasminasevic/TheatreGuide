using Application.Commands.SubsceneCommands;
using Application.DTO.SubsceneDto;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfSubsceneCommands
{
    public class EfAddSubsceneCommand : EfBaseCommand, IAddSubsceneCommand
    {
        public EfAddSubsceneCommand(EfContext context) : base(context)
        {
        }

        public void Execute(AddSubsceneDto request)
        {
            if (Context.Subscenes.Any(s => s.SceneId == request.SceneId
                 && s.SubsceneCategoryId == request.SubsceneCategoryId))
                throw new EntityAlreadyExistsException(request.SubsceneCategoryId + " at " + request.SceneId);

            Context.Subscenes.Add(new Domain.Subscene
            {
                SceneId = request.SceneId,
                SeatCapacity = request.SeatCapacity,
                SubsceneCategoryId = request.SubsceneCategoryId,
                RowsTotalNumber = request.RowsTotalNumber
            });

            Context.SaveChanges();
        }
    }
}
