﻿using Application.Commands.WriterCommands;
using Application.DTO.ShowDto;
using Application.DTO.WriterDto;
using Application.Interfaces;
using Application.Queries;
using Application.Responses;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfWriterCommands
{
    public class EfGetWritersCommand : EfBaseCommand, IGetWritersCommand
    {
        public EfGetWritersCommand(EfContext context) : base(context)
        {
        }

        public int Id => 83;

        public string Name => "Get Writer Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Anonymus, Role.Admin, Role.Theatre, Role.User };

        public bool ContainsSensitiveData => false;

        public PagedResponses<GetWriterDto> Execute(WriterQuery request)
        {
            var writers = Context.Writers
              //  .Include(s => s.Shows)
                .AsQueryable();

            //Filtering logic
            if (request.WriterFirstName != null)
                writers = writers.Where(w => w.WriterFirstName.ToLower()
                .Contains(request.WriterFirstName));

            if (request.WriterLastName != null)
                writers = writers.Where(w => w.WriterLastName.ToLower()
                .Contains(request.WriterLastName));

            //Filtering logic
            if (!string.IsNullOrEmpty(request.SearchQuery))
                writers = writers.Where(w => (w.WriterFirstName.ToLower() + ' ' + w.WriterLastName.ToLower())
                .Contains(request.SearchQuery.ToLower()));

            var data = writers.Select(w => new GetWriterDto
            {
                Id = w.Id,
                WriterFirstName = w.WriterFirstName,
                WriterLastName = w.WriterLastName,
                WriterBiography = w.WriterBiography
                // ,
                //showBaseInfoDtos = w.Shows.Select(s => new ShowBaseInfoDto
                //{
                //    Id = s.Id,
                //    Title = s.Title,
                //    CategoryName = s.Category.CategoryName
                //})
            });


            //Sorting logic
            var sortOrder = request.SortOrder;

            switch (sortOrder)
            {
                case "writerFirstName_desc":
                    data = data.OrderByDescending(w => w.WriterFirstName);
                    break;
                case "writerFirstName_asc":
                    data = data.OrderBy(w => w.WriterFirstName);
                    break;
                default:
                    data = data.OrderBy(w => w.WriterFirstName);
                    break;
            }

            var totalCount = data.Count();

            data = data.Skip((request.PageNumber - 1)*request.PerPage).Take(request.PerPage);
            var pagesCount = (int)Math.Ceiling((double)totalCount / request.PerPage);

            return new PagedResponses<GetWriterDto>
            {
                PageNumber = request.PageNumber,
                PagesCount = pagesCount,
                TotalCount = totalCount,
                Data = data
            };

        }
    }
}
