using Application.Commands.SubsceneCategoryCommands;
using Application.DTO.SubsceneCategoryDto;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfSubsceneCategoryCommands
{
    public class EfAddSubsceneCategoryCommand : EfBaseCommand, IAddSubsceneCategoryCommand
    {
        public EfAddSubsceneCategoryCommand(EfContext context) : base(context)
        {
        }

        public void Execute(SubsceneCategoryDto request)
        {
            if (Context.SubsceneCategories.Any(s => s.SubsceneCategoryName.ToLower() 
                == request.SubsceneCategoryName.ToLower()))
                throw new EntityAlreadyExistsException(request.SubsceneCategoryName);

            Context.SubsceneCategories.Add(new Domain.SubsceneCategory
            {
                SubsceneCategoryName = request.SubsceneCategoryName
            });

            Context.SaveChanges();
        }
    }
}
