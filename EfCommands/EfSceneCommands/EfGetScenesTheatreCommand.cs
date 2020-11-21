﻿using Application.Commands.SceneCommands;
using Application.DTO.SceneDto;
using Application.Queries;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfSceneCommands
{
    public class EfGetScenesTheatreCommand : EfBaseCommand, IGetScenesTheatreCommand
    {
        public EfGetScenesTheatreCommand(EfContext context) : base(context)
        {
        }

        public IEnumerable<GetSceneTheatreDto> Execute(SceneQuery request)
        {
            var scenes = Context.Scenes
               .Include(s => s.Theatre)
               .Where(s => s.TheatreId == request.TheatreId)
               .AsQueryable();

            var data = scenes.Select(s => new GetSceneTheatreDto
            {
                Id = s.Id,
                SceneName = s.SceneName
            });

            data = data.OrderBy(s => s.SceneName);

            return data;
        }
    }
}
