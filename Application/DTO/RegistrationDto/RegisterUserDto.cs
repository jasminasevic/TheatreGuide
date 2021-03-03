using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.RegistrationDto
{
    public class RegisterUserDto
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }

        public StatusType Status { get; set; }
    }

        public enum StatusType
        {
            Approved,
            Declined,
            Pending
        }
    }
