﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.UserDto
{
    public class UserDto
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public int RoleId { get; set; }

        public int? TheatreId { get; set; }

        public string TheatreName { get; set; }

        public string Status { get; set; }
    }

    public enum StatusType 
        { 
            Approved,
            Declined,
            Pending
        }
}
