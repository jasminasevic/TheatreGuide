using Application.DTO.RoleDto;
using EfDataAccess;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Application.Validators.RoleValidators
{
    public class RoleValidator : AbstractValidator<RoleDto>
    {
        public RoleValidator(EfContext context)
        {
            RuleFor(x => x.RoleName)
                .NotEmpty()
                .WithMessage("Role is required");
        }
    }
}
