using Application.DTO.SubsceneDto;
using Application.Interfaces;
using Application.Queries;
using Application.Responses;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.SubsceneCommands
{
    public interface IGetSubscenesCommand : ICommand<SubsceneQuery, PagedResponses<GetSubsceneDto>>
    {
    }
}
