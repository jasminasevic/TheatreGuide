using Application.Commands.UserCommands;
using Application.DTO.UserDto;
using Application.Interfaces;
using Application.Queries;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfUserCommands
{
    public class EfGetPendingUserRequestsNumberCommand : EfBaseCommand, IGetPendingUserRequestsNumberCommand
    {
        public EfGetPendingUserRequestsNumberCommand(EfContext context) : base(context)
        {
        }

        public int Id => 87;

        public string Name => "Get Pending Users Requests Number Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin };

        public int Execute(UserQuery search)
        {
            var filteredUsers = Context.Users
                .Where(u => u.Status == search.Status)
                .AsQueryable();

            var data = filteredUsers.Select( u => new GetPendingUsersDto
            {
               FirstName = u.FirstName,
               LastName = u.LastName,
            }).Count();

            return data;


        }
    }
}
