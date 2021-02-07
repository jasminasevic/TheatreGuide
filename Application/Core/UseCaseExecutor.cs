using Application.Exceptions;
using Application.Interfaces;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Core
{
    public class UseCaseExecutor
    {
		private readonly IApplicationPerformer performer;

        public UseCaseExecutor(IApplicationPerformer performer)
        {
            this.performer = performer;
        }

        public void ExecuteCommand<TRequest>(
			ICommand<TRequest> command, 
			TRequest request)
        {
			Console.WriteLine($"{DateTime.Now}: {performer.Identity} is trying to execute HERE YOU " +
				$" {command.Name} using data: {JsonConvert.SerializeObject(request)}");

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
