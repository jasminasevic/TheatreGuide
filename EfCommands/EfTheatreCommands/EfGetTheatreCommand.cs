using Application.Commands.TheatreCommands;
using Application.DTO.ImageDto;
using Application.DTO.RepertoireDto;
using Application.DTO.SceneDto;
using Application.DTO.SectorDto;
using Application.DTO.ShowDto;
using Application.DTO.TheatreDto;
using Application.Exceptions;
using Application.Interfaces;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfTheatreCommands
{
    public class EfGetTheatreCommand : EfBaseCommand, IGetTheatreCommand
    {
        public EfGetTheatreCommand(EfContext context) : base(context)
        {
        }

        public int Id => 71;

        public string Name => "Get Theatre Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Anonymus, Role.Admin, Role.Theatre, Role.User };

        public GetTheatreDto Execute(int request)
        {
            var theatre = Context.Theatres
                .Include(t => t.TheatreImages)
                .Include(t => t.Address)
                .Include(t => t.Repertoires)
                .Include(t => t.Shows)
                .ThenInclude(s => s.Category)
                .Include(s => s.Scenes)
                .ThenInclude(s => s.Sectors)
                .Include(t => t.Shows)
                .ThenInclude(t => t.ShowImages)
                .Where(t => t.Id == request)
                .FirstOrDefault();

            if (theatre == null)
                throw new EntityNotFoundException("Theatre cannot be found.");

            return new GetTheatreDto
            {
                Id = theatre.Id,
                Name = theatre.TheatreName,
                Description = theatre.TheatreDescription,
                Email = theatre.ContactEmail,
                Telephone = theatre.ContactTelephone,
                WorkingHours = theatre.WorkingHours,
                Location = theatre.Address.Location,
                Latitude = theatre.Address.Latitude,
                Longitude = theatre.Address.Longitude,
                ShowImageDtos = theatre.TheatreImages.Select(ti => new GetImageDto
                {
                    Id = ti.Id,
                    Alt = ti.TheatreImageAlt,
                    Path = "uploads/theatre-images/" + ti.TheatreImagePath
                }),
                ShowBaseInfoDtos = theatre.Shows.Select(s => new ShowBaseInfoDto
                {
                    Id = s.Id,
                    Title = s.Title,
                    CategoryName = s.Category.CategoryName,
                    ShowImageDtos = s.ShowImages.Select(si => new GetImageDto
                    {
                        Id = si.Id,
                        Alt = si.ShowImageAlt,
                        Path = "uploads/show-images/" + si.ShowImagePath
                    }).Take(1)
                }),
                GetSceneWithSectorsDtos = theatre.Scenes.Select(s => new GetSceneWithSectorsDto
                {
                    Id = s.Id,
                    SceneName = s.SceneName,
                    AddSectorDtos = s.Sectors.Select(s => new AddSectorDto
                    {
                        Id = s.Id,
                        SectorName = s.SectorName,
                        RowsTotalNumber = s.RowsTotalNumber.ToString(),
                        SeatCapacity = s.SeatCapacity.ToString()
                    })
                }),
                GetRepertoireForTheatreDtos = theatre.Repertoires.Select(s => new GetRepertoireForTheatreDto
                {
                    Id = s.Id,
                    ShowId = s.ShowId,
                    ShowName = s.Show.Title,
                    ShowDate = s.Date,
                    IsPremiere = s.IsPremiere
                })
            };
        }
    }
}
