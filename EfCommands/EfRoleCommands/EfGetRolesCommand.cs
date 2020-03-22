﻿using Application.Commands.Role_Commands;
using Application.DTO.RoleDto;
using Application.Queries;
using Application.Responses;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfRoleCommands
{
    public class EfGetRolesCommand : EfBaseCommand, IGetRolesCommand
    {
        public EfGetRolesCommand(EfContext context) : base(context)
        {
        }

        public PagedResponses<ShowRoleDto> Execute(RoleQuery request)
        {
            var roles = Context.Roles
                .AsQueryable();

            //search roles
            if (request.RoleName != null)
                roles = roles.Where(r => r.RoleName.ToLower()
                .Contains(request.RoleName.ToLower()));

            
            var data = roles.Select(r => new ShowRoleDto { 
                Id = r.Id,
                RoleName = r.RoleName
            });

            //Sorting logic
            var sortOrder = request.SortOrder;

            switch (sortOrder)
            {
                case "role_desc":
                    data = data.OrderByDescending(r => r.RoleName);
                    break;
                case "role_asc":
                    data = data.OrderBy(r => r.RoleName);
                    break;
                default:
                    data = data.OrderBy(r => r.RoleName);
                    break;
            };


            var totalCount = data.Count();


            //filtering login
            if (!string.IsNullOrEmpty(request.SearchString))
            {
                data = data.Where(r => r.RoleName.ToLower().Contains(request.SearchString.ToLower()));
                totalCount = data.Count();
            }


            data = data.Skip((request.PageNumber - 1) * request.PerPage).Take(request.PerPage);

            var pagesCount = (int)Math.Ceiling((double)totalCount / request.PerPage);


            return new PagedResponses<ShowRoleDto>
            {
                PageNumber = request.PageNumber,
                PagesCount = pagesCount,
                TotalCount = totalCount,
                Data = data
            };
        }
    }
}
