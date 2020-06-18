using Application.DTO.SubsceneCategoryDto;
using Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.SubsceneCategoryCommands
{
    public interface IEditSubsceneCategoryCommand : ICommand<SubsceneCategoryDto>
    {
    }
}
