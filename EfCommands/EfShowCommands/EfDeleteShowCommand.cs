using Application.Commands.ShowCommands;
using Application.Exceptions;
using Application.Interfaces;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfShowCommands
{
    public class EfDeleteShowCommand : EfBaseCommand, IDeleteShowCommand
    {
        public EfDeleteShowCommand(EfContext context) : base(context)
        {
        }

        public int Id => 52;

        public string Name => "Delete Show Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin, Role.Theatre };

        public bool ContainsSensitiveData => false;

        public void Execute(int request)
        {
            var show = Context.Shows.Find(request);

            if (show == null)
                throw new EntityNotFoundException(show.Id.ToString());

            //show.ModifiedAt = DateTime.Now;
            //show.IsDeleted = true;

            Context.Shows.Remove(show);
            Context.SaveChanges();
        }
    }
}
