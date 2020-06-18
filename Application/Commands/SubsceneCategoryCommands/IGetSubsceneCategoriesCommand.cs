using Application.DTO.SubsceneCategoryDto;
using Application.Interfaces;
using Application.Queries;
using Application.Responses;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.SubsceneCategoryCommands
{
    public interface IGetSubsceneCategoriesCommand : ICommand<SubsceneCategoryQuery, PagedResponses<GetSubsceneCategoryDto>>
    {
    }
}
