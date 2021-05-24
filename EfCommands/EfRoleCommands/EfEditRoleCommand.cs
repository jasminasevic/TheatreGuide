using Application.Commands.RoleCommands;
using Application.DTO.RoleDto;
using Application.Exceptions;
using Application.Validators.RoleValidators;
using EfDataAccess;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfRoleCommands
{
    public class EfEditRoleCommand : EfBaseCommand, IEditRoleCommand
    {
        protected readonly RoleValidator _validator;
        public EfEditRoleCommand(EfContext context, RoleValidator validator) 
            : base(context)
        {
            _validator = validator;
        }

        public int Id => 39;

        public string Name => "Edit Role Using EF";

        public IEnumerable<Application.Interfaces.Role> Roles => new List<Application.Interfaces.Role>() { };

        public bool ContainsSensitiveData => false;

        public void Execute(RoleDto request)
        {
            _validator.ValidateAndThrow(request);

            var role = Context.Roles.Find(request.Id);

            if (role == null)
                throw new EntityNotFoundException(request.Id.ToString());

            role.RoleName = request.RoleName;

            Context.SaveChanges();
        }
    }
}
