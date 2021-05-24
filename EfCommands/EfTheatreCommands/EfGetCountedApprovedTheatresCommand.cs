using Application.Commands.TheatreCommands;
using Application.Interfaces;
using Application.Queries;
using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfTheatreCommands
{
    public class EfGetCountedApprovedTheatresCommand : EfBaseCommand, IGetCountedApprovedTheatresCommand
    {
        public EfGetCountedApprovedTheatresCommand(EfContext context) : base(context)
        {
        }

        public int Id => 105;

        public string Name => "Get Total Number of Approved Theatres Using EF";

        public IEnumerable<Role> Roles => new List<Role> { Role.Admin };

        public bool ContainsSensitiveData => false;

        public int Execute(TheatreQuery search)
        {
            var approvedTheatres = Context.Users
                .Include(u => u.Role)
                .Where(u => u.Role.RoleName == "Theatre" && u.Status == Domain.User.StatusType.Approved)    
                .Count();

            return approvedTheatres;
        }
    }
}
