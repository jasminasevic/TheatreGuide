using Application.DTO.UserDto;
using EfDataAccess;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Application.Validators.UserValidators
{
    public class UserValidator : AbstractValidator<UserDto>
    {
        public UserValidator(EfContext context)
        {
            RuleFor(x => x.FirstName)
                .NotEmpty()
                .WithMessage("First name is required");

            RuleFor(x => x.LastName)
                .NotEmpty()
                .WithMessage("Last name is required");

            RuleFor(x => x.Email)
                .NotEmpty()
                .WithMessage("Email is required")
                .EmailAddress()
                .WithMessage("Wrong email format");

            RuleFor(x => x.Password)
                .NotEmpty()
                .WithMessage("Password is required");

            RuleFor(x => x.RoleId)
                .NotEmpty()
                .WithMessage("Role is required");
        }
    }
}
