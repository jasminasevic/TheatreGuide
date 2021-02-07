using Application.Commands.SceneCommands;
using Application.DTO.SceneDto;
using Application.Exceptions;
using Application.Interfaces;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfSceneCommands
{
    public class EfAddSceneCommand : EfBaseCommand, IAddSceneCommand
    {
        public EfAddSceneCommand(EfContext context) : base(context)
        {
        }

        public int Id => 43;

        public string Name => "Add New Scene Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin, Role.Theatre };

        public void Execute(SceneDto request)
        {
            if (Context.Scenes.Any(s => s.SceneName.ToLower() == request.SceneName
             && s.TheatreId == request.TheatreId))
                throw new EntityAlreadyExistsException(request.SceneName);

            if (request.SceneName == null)
                throw new Exception("Scene name must be added");

            if (request.TheatreId == 0)
                throw new Exception("Theatre must be added");

            var scene = new Domain.Scene
            {
                SceneName = request.SceneName,
                TheatreId = request.TheatreId
            };

            Context.Scenes.Add(scene);

            foreach(var sector in request.AddSectorDtos)
            {
                Context.Sectors.Add(new Domain.Sector
                {
                    Scene = scene,
                    SectorName = sector.SectorName,
                    SeatCapacity = Convert.ToInt32(sector.SeatCapacity),
                    RowsTotalNumber = Convert.ToInt32(sector.RowsTotalNumber)
                });
            }

            Context.SaveChanges();
        }
    }
}
