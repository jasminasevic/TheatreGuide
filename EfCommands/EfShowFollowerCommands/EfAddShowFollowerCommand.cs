using Application.Commands.ShowFollowerCommands;
using Application.DTO.ShowFollowerDto;
using Application.Exceptions;
using Application.Interfaces;
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

        public int Id => 65;

        public string Name => "Add New Show Follower Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.User };

        public void Execute(ShowFollowerDto request)
        {
            if (Context.ShowFollowers.Any(sf => sf.UserId == Convert.ToInt32(request.UserId)
                 && sf.ShowId == Convert.ToInt32(request.ShowId)))
                throw new EntityAlreadyExistsException(request.ShowId.ToString());

            Context.ShowFollowers.Add(new Domain.ShowFollower
            {
                ShowId = Convert.ToInt32(request.ShowId),
                UserId = Convert.ToInt32(request.UserId)
            });

            Context.SaveChanges();
        }
    }
}
