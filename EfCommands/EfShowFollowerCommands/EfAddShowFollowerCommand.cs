using Application.Commands.ShowFollowerCommands;
using Application.DTO.ShowFollowerDto;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfShowFolloweCommands
{
    public class EfAddShowFollowerCommand : EfBaseCommand, IAddShowFollowerCommand
    {
        public EfAddShowFollowerCommand(EfContext context) : base(context)
        {
        }

        public void Execute(ShowFollowerDto request)
        {
            if (Context.ShowFollowers.Any(sf => sf.UserId == request.UserId
                 && sf.ShowId == request.ShowId))
                throw new EntityAlreadyExistsException(request.ShowId.ToString());

            Context.ShowFollowers.Add(new Domain.ShowFollower
            {
                ShowId = request.ShowId,
                UserId = request.UserId
            });

            Context.SaveChanges();
        }
    }
}
