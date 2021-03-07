using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.UserDto
{
    public class GetPendingUsersDto
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public int Total { get; set; }
    }
}
