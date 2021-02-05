using Application.DTO.CategoryDto;
using Application.Interfaces;
using Application.Queries;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.CategoryCommands
{
    public interface IGetCategoriesListCommand : IQuery<SearchQuery, IEnumerable<CategoryBasicDto>>
    {
    }
}
