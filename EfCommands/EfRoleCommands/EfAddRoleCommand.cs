using Application.Commands.RoleCommands;
using Application.DTO.RoleDto;
using Application.Exceptions;
using Application.Interfaces;
using Application.Validators.RoleValidators;
using EfDataAccess;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfRoleCommands
{
    public class EfAddRoleCommand : EfBaseCommand, IAddRoleCommand
    {
        protected readonly RoleValidator _validator;
        public EfAddRoleCommand(EfContext context, RoleValidator validator) 
            : base(context)
        {
            _validator = validator;
        }

        public int Id => 37;

        public string Name => "Add New Role Using EF";


        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin };

        public void Execute(RoleDto request)
        {
            _validator.ValidateAndThrow(request);

            Context.Roles.Add(new Domain.Role
            {
                RoleName = request.RoleName
            });

            Context.SaveChanges();


        }
    }
}
