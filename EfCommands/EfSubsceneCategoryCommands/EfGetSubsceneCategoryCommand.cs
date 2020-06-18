using Application.Commands.SubsceneCategoryCommands;
using Application.DTO.SubsceneCategoryDto;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCommands.EfSubsceneCategoryCommands
{
    public class EfGetSubsceneCategoryCommand : EfBaseCommand, IGetSubsceneCategoryCommand
    {
        public EfGetSubsceneCategoryCommand(EfContext context) : base(context)
        {
        }

        public GetSubsceneCategoryDto Execute(int request)
        {
            var subsceneCategory = Context.SubsceneCategories
                .Find(request);

            if (subsceneCategory == null)
                throw new EntityNotFoundException(request.ToString());

            return new GetSubsceneCategoryDto
            {
                Id = subsceneCategory.Id,
                SubsceneCategoryName = subsceneCategory.SubsceneCategoryName
            };
        }
    }
}
