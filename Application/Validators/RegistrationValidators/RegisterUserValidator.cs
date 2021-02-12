using Application.DTO.RegistrationDto;
using EfDataAccess;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Application.Validators.RegistrationValidators
{
    public class RegisterUserValidator : AbstractValidator<RegisterUserDto>
    {
        public RegisterUserValidator(EfContext context)
        {
			RuleFor(x => x.FirstName)
				.NotEmpty()
				.WithMessage("First name is required");
			RuleFor(x => x.LastName)
				.NotEmpty()
				.WithMessage("Last name is required");
			RuleFor(x => x.Password)
				.NotEmpty()
				.WithMessage("Password is required")
				.MinimumLength(6)
				.WithMessage("Password must have at least 6 characters");
			RuleFor(x => x.Email)
				.NotEmpty()
				.WithMessage("Email is required")
				.EmailAddress()
				.WithMessage("Email format is wrong")
				.Must(x => !context.Users.Any(user => user.Email == x))
				.WithMessage("Email is already taken");
		}

	}
}
