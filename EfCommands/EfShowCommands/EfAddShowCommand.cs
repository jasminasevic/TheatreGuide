using Application.Commands.ShowCommands;
using Application.DTO.ShowDto;
using Application.Exceptions;
using Application.Helpers;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace EfCommands.EfShowCommands
{
    public class EfAddShowCommand : EfBaseCommand, IAddShowCommand
    {
        public EfAddShowCommand(EfContext context) : base(context)
        {
        }

        public void Execute(ShowDto request)
        {
            if (Context.Shows.Any(s => s.Title.ToLower().Contains(request.Title)
                 && s.TheatreId == request.TheatreId))
                throw new EntityAlreadyExistsException(request.Title);

            if (request.Title == null)
                throw new Exception("Title is required");

            var show = new Domain.Show
            {
                Title = request.Title,
                ShowDescription = request.Description,
                Duration = request.Duration,
                ContentAdvisory = request.ContentAdvisory,
                PremiereDate = request.PremiereDate,
                CategoryId = request.CategoryId,
                WriterId = request.WriterId,
                DirectorId = request.DirectorId,
                TheatreId = request.TheatreId,
                SceneId = request.SceneId
            };

            Context.Shows.Add(show);

            foreach (var price in request.AddPriceDtos)
            {
                Context.Prices.Add(new Domain.Price
                {
                    Show = show,
                    SectorId = price.SectorId,
                    TicketPrice = price.TicketPrice
                });

            };

            if (request.ShowImages != null)
            {
                foreach (var image in request.ShowImages)
                {
                    var ext = Path.GetExtension(image.FileName);
                    if (!FileUpload.AllowedExtensions.Contains(ext))
                    {
                        throw new Exception("File extention is not ok");
                    };

                    var newFileName = Guid.NewGuid().ToString() + "_" + image.FileName;
                    var filePath = Path.Combine(Directory.GetCurrentDirectory(),
                        "wwwroot", "uploads", "show-images", newFileName);

                    image.CopyTo(new FileStream(filePath, FileMode.Create));

                    var showImage = new Domain.ShowImage
                    {
                        ShowImageAlt = request.Title + " image",
                        ShowImagePath = newFileName,
                        Show = show
                    };

                    Context.ShowImages.Add(showImage);
                }

            }

            foreach(var actor in request.ActorShowDtos)
            {
                Context.ActorShows.Add(new Domain.ActorShow
                {
                    ActorId = actor.ActorId,
                    ActorRoleName = actor.ActorRoleName,
                    ActorRoleDescription = actor.ActorRoleDescription,
                    Show = show
                });
            }

            Context.SaveChanges();
        }
    }
}
