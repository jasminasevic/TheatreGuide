﻿using Application.DTO.TheatreDto;
using Application.Interfaces;
using Application.Queries;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.TheatreCommands
{
    public interface IGetRecentlyJoinedTheatresCommand : ICommand<SearchQuery, IEnumerable<GetTheatreBaseInfoDto>>
    {
    }
}