using Application.Commands.ShowCommands;
using Application.DTO.ActorDto;
using Application.DTO.ImageDto;
using Application.DTO.PriceDto;
using Application.DTO.RepertoireDto;
using Application.DTO.SectorDto;
using Application.DTO.ShowDto;
using Application.Exceptions;
using Application.Interfaces;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfShowCommands
{
    public class EfGetShowCommand : EfBaseCommand, IGetShowCommand
    {
        public EfGetShowCommand(EfContext context) : base(context)
        {
        }

        public int Id => 60;

        public string Name => "Get Show Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Anonymus, Role.Admin, Role.Theatre, Role.User };

        public GetShowDto Execute(int request)
        {
            var show = Context.Shows
                .Include(s => s.ShowImages)
                .Include(s => s.Category)
                .Include(s => s.Director)
                .Include(s => s.Theatre)
                .ThenInclude(s => s.Address)
                .Include(s => s.ActorShows)
                .ThenInclude(s => s.Actor)
                .Include(s => s.Scene)
                .ThenInclude(s => s.Sectors)
                .Include(s => s.ShowFollowers)
                .Include(s => s.Repertoires)
                .Where(s => s.Id == request)
                .FirstOrDefault();

            if (show == null)
                throw new EntityNotFoundException(request.ToString());

            return new GetShowDto
            {
                Id = show.Id,
                Title = show.Title,
                CategoryId = show.Category.Id,
                Category = show.Category.CategoryName,
                Writer = show.Writer,
                DirectorId = show.DirectorId,
                DirectorFirstName = show.Director.DirectorFirstName,
                DirectorLastName = show.Director.DirectorLastName,
                Description = show.ShowDescription,
                Duration = show.Duration,
                ContentAdvisory = show.ContentAdvisory,
                PremiereDate = show.PremiereDate,
                Theatre = show.Theatre.TheatreName,
                TheatreId = show.Theatre.Id,
                Scene = show.Scene.SceneName,
                SceneId = show.SceneId,
                Address = show.Theatre.Address.Location,
                FollowersNumber = show.ShowFollowers.Count(),

                ShowImageDtos = show.ShowImages.Select(i => new GetImageDto
                {
                    Id = i.Id,
                    Alt = i.ShowImageAlt,
                    Path = "uploads/show-images/" + i.ShowImagePath
                }),
                ActorShowDtos = show.ActorShows.Select(a => new ActorShowDto
                {
                    ActorId = a.ActorId,
                    ActorFirstName = a.Actor.ActorFirstName,
                    ActorLastName = a.Actor.ActorLastName,
                    ActorRoleDescription = a.ActorRoleDescription,
                    ActorRoleName = a.ActorRoleName
                }),
                GetSectorDtos = show.Scene.Sectors.Select(s => new GetSectorDto
                {
                    Id = s.Id,
                    SectorName = s.SectorName,
                    RowsTotalNumber = s.RowsTotalNumber,
                    SeatCapacity = s.SeatCapacity
                }),
                GetRepertoireForShowDtos = show.Repertoires.Select(r => new GetRepertoireForShowDto
                {
                    Id = r.Id,
                    ShowDate = r.Date,
                    IsPremiere = r.IsPremiere
                }).Where(s => s.ShowDate > DateTime.Now)
                .OrderBy(s => s.ShowDate)
            };
        }
    }
}
