using Application.Commands.LoggingCommands;
using Application.DTO.LoggingDto;
using Application.Interfaces;
using Application.Queries;
using Application.Responses;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.Logging
{
    public class EfGetLoggingsCommand : EfBaseCommand, IGetLoggingsCommand
    {
        public EfGetLoggingsCommand(EfContext context) : base(context)
        {
        }

        public int Id => 106;

        public string Name => "Get Loggings Using EF";

        public IEnumerable<Role> Roles => new List<Role> { Role.Admin };

        public bool ContainsSensitiveData => false;

        public PagedResponses<GetLoggingDto> Execute(LoggingQuery query)
        {
            var loggings = Context.UseCaseLogs
                .AsQueryable();

            //Filtering logic
            if (query.Performer != null)
                loggings = loggings.Where(lo => lo.Performer.ToLower()
                .Contains(query.Performer.ToLower()));

            if(!String.IsNullOrEmpty(query.SearchQuery))
                loggings = loggings.Where(lo => lo.Performer.ToLower()
               .Contains(query.SearchQuery.ToLower()));

            var data = loggings.Select(lo => new GetLoggingDto
            {
                Id = lo.Id,
                UseCaseName = lo.UseCaseName,
                Performer = lo.Performer,
                LoggingDate = lo.Date,
                UseCaseData = lo.Data
            });

            var sortOrder = query.SortOrder;

            switch (sortOrder)
            {
                case "performer_desc":
                    data = data.OrderByDescending(lo => lo.Performer);
                    break;
                case "performer_asc":
                    data = data.OrderBy(lo => lo.Performer);
                    break;
                default:
                    data = data.OrderByDescending(lo => lo.LoggingDate);
                    break;
            }

            var totalCount = data.Count();

            data = data.Skip((query.PageNumber - 1) * query.PerPage).Take(query.PerPage);
            var pagesCount = (int)Math.Ceiling((double)totalCount / query.PerPage);

            
            return new PagedResponses<GetLoggingDto>
            {
                PageNumber = query.PageNumber,
                PagesCount = pagesCount,
                TotalCount = totalCount,
                Data = data
            };
        }
    }
}
