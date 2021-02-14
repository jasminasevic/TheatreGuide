using Application.Exceptions;
using Application.Interfaces;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.UseCase
{
    public class UseCaseExecutor
    {
		private readonly IApplicationPerformer performer;
        private readonly IUseCaseLogger logger;

        public UseCaseExecutor(IApplicationPerformer performer, IUseCaseLogger logger)
        {
            this.performer = performer;
            this.logger = logger;
        }

        public TResult ExecuteQuery<TSearch, TResult>
            (IQuery<TSearch, TResult> query, 
            TSearch search)
        {
            var performerRole = performer.Role;

            if(performer.Role != Role.Anonymus)
            {
                logger.Log(query, performer, search);
            }

            foreach (var role in query.Roles)
            {
                if (role == performerRole)
                {
                    var result = query.Execute(search);
                    return result;
                }
            }

            throw new UnauthorizedUseCaseException(query, performer);
        }


        public void ExecuteCommand<TRequest>(
			ICommand<TRequest> command, 
			TRequest request)
        {
            logger.Log(command, performer, request);

            var performerRole = performer.Role;

            foreach(var role in command.Roles)
            {
                if (role == performerRole)
                {
                    command.Execute(request);
                    return;
                }
            }

            throw new UnauthorizedUseCaseException(command, performer);

        }

	}
}
