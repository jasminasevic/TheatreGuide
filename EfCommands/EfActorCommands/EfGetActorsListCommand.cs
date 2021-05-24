using Application.Commands.ActorCommands;
using Application.DTO.ActorDto;
using Application.Interfaces;
using Application.Queries;
using EfDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfActorCommands
{
    public class EfGetActorsListCommand : EfBaseCommand, IGetActorsListCommand
    {
        public EfGetActorsListCommand(EfContext context) : base(context)
        {
        }

        public int Id => 6;

        public string Name => "Get Actor List Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Anonymus, Role.Admin, Role.Theatre, Role.User };

        public bool ContainsSensitiveData => false;

        public IEnumerable<GetActorBasicDto> Execute(SearchQuery request)
        {
            var actors = Context.Actors
                .AsQueryable();

            var data = actors.Select(a => new GetActorBasicDto
            {
                Id = a.Id,
                FirstName = a.ActorFirstName,
                LastName = a.ActorLastName
            });

            data = data.OrderBy(a => a.FirstName);

            return data;
        }
    }
}
