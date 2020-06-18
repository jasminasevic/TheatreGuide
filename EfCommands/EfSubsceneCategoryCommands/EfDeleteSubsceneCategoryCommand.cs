using Application.Commands.SubsceneCategoryCommands;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCommands.EfSubsceneCategoryCommands
{
    public class EfDeleteSubsceneCategoryCommand : EfBaseCommand, IDeleteSubsceneCategoryCommand
    {
        public EfDeleteSubsceneCategoryCommand(EfContext context) : base(context)
        {
        }

        public void Execute(int request)
        {
            var subsceneCategory = Context.SubsceneCategories.Find(request);

            if (subsceneCategory == null)
                throw new EntryPointNotFoundException(subsceneCategory.ToString());

            Context.SubsceneCategories.Remove(subsceneCategory);
            Context.SaveChanges();
        }
    }
}
