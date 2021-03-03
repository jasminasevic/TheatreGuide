using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.RegistrationDto
{
    public class RegisterBusinessUserDto : RegisterUserDto
    {
        public string Theatre { get; set; }

        public string Location { get; set; }

        public decimal Longitude { get; set; }

        public decimal Latitude { get; set; }

    }
}
