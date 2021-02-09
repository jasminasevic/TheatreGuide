using Application.DTO.ShowDto;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Validators.ShowValidators
{
    public class ShowValidator : AbstractValidator<ShowDto>
    {
        public ShowValidator()
        {
            RuleFor(x => x.Title)
                .NotEmpty()
                .WithMessage("Show title is required");

            RuleFor(x => x.Description)
                .NotEmpty()
                .WithMessage("Show description is required");

            RuleFor(x => x.Duration)
                .NotEmpty()
                .WithMessage("Show duration is required");

            RuleFor(x => x.CategoryId)
                .NotEmpty()
                .WithMessage("Category is required");

            RuleFor(x => x.Writer)
                .NotEmpty()
                .WithMessage("Writer is required");

            RuleFor(x => x.DirectorId)
                .NotEmpty()
                .WithMessage("Director is required");

            RuleFor(x => x.TheatreId)
                .NotEmpty()
                .WithMessage("Theatre is required");

            RuleFor(x => x.SceneId)
                .NotEmpty()
                .WithMessage("Scene is required");
        }

        public void validateAndThrow(ShowDto request)
        {
            throw new NotImplementedException();
        }
    }
}
