using Application.Commands.ActorCommands;
using Application.Exceptions;
using Application.Interfaces;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCommands.EfActorCommands
{
    public class EfDeleteActorCommand : EfBaseCommand, IDeleteActorCommand
    {
        public EfDeleteActorCommand(EfContext context) : base(context)
        {
        }

        public int Id => 2;

        public string Name => "Delete Actor Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin };

        public void Execute(int request)
        {
            var actor = Context.Actors.Find(request);

            if (actor == null)
                throw new EntityNotFoundException(request.ToString());

            Context.Actors.Remove(actor);
            Context.SaveChanges();
        }
    }
}
