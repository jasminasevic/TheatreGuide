using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Interfaces
{
    public interface IUseCaseLogger
    {
        void Log(IUseCase useCase, IApplicationPerformer performer, object UseCaseData);
    }
}
