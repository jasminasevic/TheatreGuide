using Application.DTO.CategoryDto;
using Application.Interfaces;
using Application.Queries;
using Application.Responses;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.CategoryCommands
{
    public interface IGetCategoriesCommand : IQuery<CategoryQuery, PagedResponses<GetCategoryDto>>
    {
    }
}
