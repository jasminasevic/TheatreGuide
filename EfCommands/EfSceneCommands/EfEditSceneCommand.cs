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
    public class EfEditSceneCommand : EfBaseCommand, IEditSceneCommand
    {
        protected readonly SceneValidator _validator;
        public EfEditSceneCommand(EfContext context, SceneValidator validator) 
            : base(context)
        {
            _validator = validator;
        }

        public int Id => 45;

        public string Name => "Edit Scene Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin, Role.Theatre };

        public void Execute(SceneDto request)
        {
            _validator.ValidateAndThrow(request);

            var scene = Context.Scenes.Find(request.Id);

            if (scene == null)
                throw new EntityNotFoundException(request.Id.ToString());

            if (request.SceneName.ToLower() != scene.SceneName
                && request.TheatreId != scene.TheatreId)
            {
                if (Context.Scenes.Any(s => s.SceneName.ToLower() == request.SceneName.ToLower()
                     && s.Theatre.TheatreName.ToLower() == request.SceneName.ToLower()))
                    throw new EntityAlreadyExistsException(request.SceneName);
            }

            scene.SceneName = request.SceneName;
            scene.TheatreId = request.TheatreId;
            scene.ModifiedAt = DateTime.Now;

            foreach (var sector in Context.Sectors.Where(s => s.SceneId == request.Id))
            {
                Context.Sectors.Remove(sector);
            }

            foreach(var subscene in request.AddSectorDtos)
            {
                Context.Sectors.Add(new Domain.Sector
                {
                    ModifiedAt = DateTime.Now,
                    SectorName = subscene.SectorName,
                    SceneId = scene.Id,
                    SeatCapacity = Convert.ToInt32(subscene.SeatCapacity),
                    RowsTotalNumber = Convert.ToInt32(subscene.RowsTotalNumber)
                });
            }

            Context.SaveChanges();
        }
    }
}
