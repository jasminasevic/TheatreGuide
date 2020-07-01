using Application.Commands.RepertoireCommands;
using Application.DTO.RepertoireDto;
using Application.Exceptions;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCommands.EfRepertoireCommands
{
    public class EfEditRepertoireCommand : EfBaseCommand, IEditRepertoireCommand
    {
        public EfEditRepertoireCommand(EfContext context) : base(context)
        {
        }

        public void Execute(RepertoireDto request)
        {
            var repertoire = Context.Repertoires.Find(request.Id);

            if (repertoire == null)
                throw new EntityNotFoundException(request.Id.ToString());

            repertoire.ShowId = request.ShowId;
            repertoire.TheatreId = request.TheatreId;
            repertoire.SceneId = request.SceneId;
            repertoire.Date = request.ShowDate;
        }
    }
}
