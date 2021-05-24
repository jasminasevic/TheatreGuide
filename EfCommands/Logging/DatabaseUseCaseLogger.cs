using Application.DTO.RegistrationDto;
using Application.DTO.UserDto;
using Application.Interfaces;
using EfDataAccess;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCommands.Logging
{
    public class DatabaseUseCaseLogger : EfBaseCommand, IUseCaseLogger
    {
        public DatabaseUseCaseLogger(EfContext context) : base(context)
        {
        }

        public void Log(IUseCase useCase, IApplicationPerformer performer, object UseCaseData)
        {
            if (useCase.ContainsSensitiveData)
            {
                Context.UseCaseLogs.Add(new Domain.UseCaseLog
                {
                    Date = DateTime.Now,
                    UseCaseName = useCase.Name,
                    Performer = performer.Identity
                });

                Context.SaveChanges();
                return;
            }

            Context.UseCaseLogs.Add(new Domain.UseCaseLog
            {
                Date = DateTime.Now,
                Data = JsonConvert.SerializeObject(UseCaseData),
                UseCaseName = useCase.Name,
                Performer = performer.Identity
            });

            Context.SaveChanges();
        }
    }
}
