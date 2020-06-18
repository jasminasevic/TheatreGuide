using Application.Commands.SubsceneCategoryCommands;
using Application.DTO.CategoryDto;
using Application.DTO.SubsceneCategoryDto;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfSubsceneCategoryCommands
{
    public class EfEditSubsceneCategoryCommand : EfBaseCommand, IEditSubsceneCategoryCommand
    {
        public EfEditSubsceneCategoryCommand(EfContext context) : base(context)
        {
        }


        public void Execute(SubsceneCategoryDto request)
        {
            var subsceneCategory = Context.SubsceneCategories.Find(request.Id);

            if (subsceneCategory == null)
                throw new EntityNotFoundException(subsceneCategory.ToString());

            if (request.SubsceneCategoryName != subsceneCategory.SubsceneCategoryName
                && Context.SubsceneCategories.Any(s => s.SubsceneCategoryName.ToLower()
                == request.SubsceneCategoryName.ToLower()))
                throw new EntityAlreadyExistsException(request.SubsceneCategoryName);

            subsceneCategory.SubsceneCategoryName = request.SubsceneCategoryName;
            subsceneCategory.ModifiedAt = DateTime.Now;

            Context.SaveChanges();
        }
    }
}
