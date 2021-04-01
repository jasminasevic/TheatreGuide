﻿using Application.DTO.RepertoireDto;
using Application.Interfaces;
using Application.Queries;
using Application.Responses;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.RepertoireCommands
{
    public interface IGetRepertoiresFilteredByTheatreCommand : IQuery<RepertoireQuery, PagedResponses<GetRepertoireBaseInfoDto>>
    {
    }
}