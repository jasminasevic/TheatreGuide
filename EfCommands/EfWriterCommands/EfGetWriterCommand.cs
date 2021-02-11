using Application.Commands.WriterCommands;
using Application.DTO.ShowDto;
using Application.DTO.WriterDto;
using Application.Exceptions;
using Application.Interfaces;
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

        public int Id => 82;

        public string Name => "Get Writer Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Anonymus, Role.Admin, Role.Theatre, Role.User };

        public GetWriterDto Execute(int request)
        {
            var writer = Context.Writers
                .Where(w => w.Id == request)
                .FirstOrDefault();

            if (writer == null)
                throw new EntityNotFoundException(request.ToString());

            return new GetWriterDto
            {
                Id = writer.Id,
                WriterFirstName = writer.WriterFirstName,
                WriterLastName = writer.WriterLastName,
                WriterBiography = writer.WriterBiography
                //showBaseInfoDtos = writer.Shows.Select(s => new ShowBaseInfoDto
                //{
                //    Id = s.Id,
                //    Title = s.Title,
                //    CategoryName = s.Category.CategoryName
                //})
            };
        }
    }
}
