using Application.Commands.UserCommands;
using Application.DTO.UserDto;
using Application.Exceptions;
using Application.Interfaces;
using Application.Queries;
using Application.Responses;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfUserCommands
{
    public class EfGetUsersCommand : EfBaseCommand, IGetUsersCommand
    {
        public EfGetUsersCommand(EfContext context) : base(context)
        {
        }

        public int Id => 78;

        public string Name => "Get Users Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin };

        public PagedResponses<GetUserDto> Execute(UserQuery request)
        {
            var users = Context.Users
                .Include(r => r.Role)
                .AsQueryable();

            //filtering logic
            if (request.FirstName != null)
                users = Context.Users.Where(u => u.FirstName.ToLower().Contains(request.FirstName.ToLower()));

            if (request.LastName != null)
                users = Context.Users.Where(u => u.LastName.ToLower().Contains(request.LastName.ToLower()));

            if (request.Email != null)
                users = Context.Users.Where(u => u.Email.ToLower().Contains(request.Email.ToLower()));

            if (request.SearchQuery != null)
                users = Context.Users.Where(u => (u.FirstName.ToLower() + ' ' + u.LastName.ToLower())
                    .Contains(request.SearchQuery.ToLower())
                    || (u.Email.ToLower().Contains(request.SearchQuery.ToLower())));

            var data = users.Select(u => new GetUserDto
            {
                Id = u.Id,
                FirstName = u.FirstName,
                LastName = u.LastName,
                Email = u.Email,
                RoleId = u.Role.Id,
                RoleName = u.Role.RoleName
            });


            if (data == null)
                throw new EntityNotFoundException(request.SearchQuery);


            var sortOrder = request.SortOrder;

            //sorting logic
            switch (sortOrder)
            {
                case "firstName_desc":
                    data = data.OrderByDescending(u => u.FirstName);
                    break;
                case "firstName_asc":
                    data = data.OrderBy(u => u.FirstName);
                    break;
                case "lastName_desc":
                    data = data.OrderByDescending(u => u.LastName);
                    break;
                case "lastName_asc":
                    data = data.OrderBy(u => u.LastName);
                    break;
                case "email_desc":
                    data = data.OrderByDescending(u => u.Email);
                    break;
                case "email_asc":
                    data = data.OrderBy(u => u.Email);
                    break;
                case "roleName_desc":
                    data = data.OrderByDescending(u => u.RoleName);
                    break;
                case "roleName_asc":
                    data = data.OrderBy(u => u.RoleName);
                    break;
                default:
                    data = data.OrderBy(u => u.FirstName);
                    break;
            }


            var totalCount = data.Count();

            data = data.Skip((request.PageNumber - 1) * request.PerPage).Take(request.PerPage);

            var pagesCount = (int)Math.Ceiling((double)totalCount / request.PerPage);


            return new PagedResponses<GetUserDto>
            {
                PageNumber = request.PageNumber,
                PagesCount = pagesCount,
                TotalCount = totalCount,
                Data = data
            };
        }
    }
}
