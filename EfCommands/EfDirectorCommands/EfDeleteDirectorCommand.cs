using Application.Commands.DirectorCommands;
using Application.Exceptions;
using Application.Interfaces;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCommands.EfDirectorCommands
{
    public class EfDeleteDirectorCommand : EfBaseCommand, IDeleteDirectorCommand
    {
        public EfDeleteDirectorCommand(EfContext context) : base(context)
        {
        }

        public int Id => 20;

        public string Name => "Delete Director Using EF";


        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin };

        public bool ContainsSensitiveData => false;

        public void Execute(int request)
        {
            var director = Context.Directors.Find(request);

            if (director == null)
                throw new EntityNotFoundException(request.ToString());

            Context.Directors.Remove(director);

            Context.SaveChanges();
        }
    }
}
