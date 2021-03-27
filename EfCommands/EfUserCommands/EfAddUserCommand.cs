﻿using Application.Commands.UserCommands;
using Application.DTO.UserDto;
using Application.Exceptions;
using Application.Interfaces;
using Application.Validators.UserValidators;
using EfDataAccess;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCommands.EfUserCommands
{
    public class EfAddUserCommand : EfBaseCommand, IAddUserCommand
    {
        protected readonly UserValidator _validator;
        public EfAddUserCommand(EfContext context, UserValidator validator) 
            : base(context)
        {
            _validator = validator;
        }

        public int Id => 74;

        public string Name => "Add New User Using EF";

        public IEnumerable<Role> Roles => new List<Role>() { Role.Admin };

        public void Execute(UserDto request)
        {
            _validator.ValidateAndThrow(request);

            if (Context.Users.Any(u => u.Email == request.Email))
                throw new EntityAlreadyExistsException(request.Email);


            Context.Users.Add(new Domain.User
            {
                FirstName = request.FirstName,
                LastName = request.LastName,
                Email = request.Email,
                Password = request.Password,
                RoleId = request.RoleId,
                TheatreId = request.TheatreId
            });

            Context.SaveChanges();

        }
    }
}
