﻿using Application.DTO.ActorDto;
using Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Commands.ShowCommands
{
    public interface IGetPopularShowsFilteredByActorCommand : ICommand<int, IEnumerable<GetActorPopularShowDto>>
    {
    }
}