using Application.Commands.CategoryCommands;
using Application.Exceptions;
using Application.Interfaces;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCommands.EfCategoryCommands
{
    public class EfDeleteCategoryCommand : EfBaseCommand, IDeleteCategoryCommand
    {
        public EfDeleteCategoryCommand(EfContext context) : base(context)
        {
        }

        public int Id => 8;

        public string Name => "Delete Category Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin };

        public bool ContainsSensitiveData => false;

        public void Execute(int request)
        {
            var category = Context.Categories.Find(request);

            if (category == null)
                throw new EntityNotFoundException(request.ToString());

            Context.Categories.Remove(category);
            Context.SaveChanges();
        }
    }
}
