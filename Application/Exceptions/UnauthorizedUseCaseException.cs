using Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Exceptions
{
    public class UnauthorizedUseCaseException : Exception
    {
        public UnauthorizedUseCaseException(IUseCase useCase, IApplicationPerformer appPerformer)
        : base ($"Performer with an id of { appPerformer.Id} – { appPerformer.Identity } " +
              $"tried to execute {useCase.Name}")
        {}

    }
}
