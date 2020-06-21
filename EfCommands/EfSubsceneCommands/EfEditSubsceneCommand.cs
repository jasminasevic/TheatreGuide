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
    public class EfEditSubsceneCommand : EfBaseCommand, IEditSubsceneCommand
    {
        public EfEditSubsceneCommand(EfContext context) : base(context)
        {
        }

        public void Execute(AddSubsceneDto request)
        {
            var subscene = Context.Subscenes.Find(request.Id);

            if (subscene == null)
                throw new EntityNotFoundException(request.Id.ToString());

            if(request.SceneId != subscene.SceneId 
                && request.SubsceneCategoryId != subscene.SubsceneCategoryId)
            {
                if (Context.Subscenes.Any(s => s.SceneId == request.SceneId
                     && s.SubsceneCategoryId == request.SubsceneCategoryId))
                    throw new EntityAlreadyExistsException(request.SceneId.ToString());
            };

            subscene.SceneId = request.SceneId;
            subscene.SeatCapacity = request.SeatCapacity;
            subscene.SubsceneCategoryId = request.SubsceneCategoryId;
            subscene.RowsTotalNumber = request.RowsTotalNumber;

            Context.SaveChanges();
        }
    }
}
