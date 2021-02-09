using Application.DTO.SceneDto;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Validators.SceneValidators
{
    public class SceneValidator : AbstractValidator<SceneDto>
    {
        public SceneValidator()
        {
            RuleFor(x => x.SceneName)
                .NotEmpty()
                .WithMessage("Scene name is required");

            RuleFor(x => x.TheatreId)
                .NotEmpty()
                .WithMessage("Theatre is required");
        }
    }
}
