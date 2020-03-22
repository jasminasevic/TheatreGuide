using Application.DTO.CategoryDto;
using Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.CategoryCommands
{
    public interface IGetCategoryCommand : ICommand<int, CategoryDto>
    {
    }
}
