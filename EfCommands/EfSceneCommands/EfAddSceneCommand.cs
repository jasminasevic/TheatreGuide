using Application.Commands.SceneCommands;
using Application.DTO.SceneDto;
using Application.Exceptions;
using Application.Interfaces;
using Application.Validators.SceneValidators;
using EfDataAccess;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfSceneCommands
{
    public class EfAddSceneCommand : EfBaseCommand, IAddSceneCommand
    {
        private readonly SceneValidator _validator;
        public EfAddSceneCommand(EfContext context, SceneValidator validator) 
            : base(context)
        {
            _validator = validator;
        }

        public int Id => 43;

        public string Name => "Add New Scene Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin, Role.Theatre };

        public bool ContainsSensitiveData => false;

        public void Execute(SceneDto request)
        {
            _validator.ValidateAndThrow(request);

            if (Context.Scenes.Any(s => s.SceneName.ToLower() == request.SceneName
             && s.TheatreId == request.TheatreId))
                throw new EntityAlreadyExistsException(request.SceneName);

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
