using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Interfaces
{
    public interface ICommand<TRequest> : IUseCase
    {
        void Execute(TRequest request);
    }

    public interface IQuery<TSearch, TResult> : IUseCase
    {
        TResult Execute(TSearch search); 
    }

    public interface IComm<TFirstRequest, TSecondRequest> : IUseCase
    {
        void Execute(TFirstRequest requestFirst, TSecondRequest requestSecond);
    }

}

