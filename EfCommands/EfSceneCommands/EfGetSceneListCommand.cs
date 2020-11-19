using Application.Commands.SceneCommands;
using Application.DTO.SceneDto;
using Application.Queries;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfSceneCommands
{
    public class EfGetSceneListCommand : EfBaseCommand, IGetScenesListCommand
    {
        public EfGetSceneListCommand(EfContext context) : base(context)
        {
        }

        public IEnumerable<GetScenesBasicDto> Execute(SearchQuery request)
        {
            var scenes = Context.Scenes
                .AsQueryable();

            var data = scenes.Select(s => new GetScenesBasicDto
            {
                Id = s.Id,
                SceneName = s.SceneName
            });

            data = data.OrderBy(s => s.SceneName);

            return data;
        }
    }
}
