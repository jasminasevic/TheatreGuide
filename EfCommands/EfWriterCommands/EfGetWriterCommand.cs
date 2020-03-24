using Application.Commands.WriterCommands;
using Application.DTO.ShowDto;
using Application.DTO.WriterDto;
using Application.Exceptions;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfWriterCommands
{
    public class EfGetWriterCommand : EfBaseCommand, IGetWriterCommand
    {
        public EfGetWriterCommand(EfContext context) : base(context)
        {
        }

        public ShowWriterDto Execute(int request)
        {
            var writer = Context.Writers
                .Include(s => s.Shows)
                .Where(w => w.Id == request)
                .FirstOrDefault();

            if (writer == null)
                throw new EntityNotFoundException(request.ToString());

            return new ShowWriterDto
            {
                Id = writer.Id,
                WriterFirstName = writer.WriterFirstName,
                WriterLastName = writer.WriterLastName,
                WriterBiography = writer.WriterBiography,
                showBaseInfoDto = writer.Shows.Select(s => new ShowBaseInfoDto
                {
                    Id = s.Id,
                    Title = s.Title,
                    CategoryName = s.Category.CategoryName
                })
            };
        }
    }
}
