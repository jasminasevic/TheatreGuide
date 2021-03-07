using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Queries
{
    public class UserQuery : BaseQuery
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public Domain.User.StatusType Status { get; set; }

        public string Type { get; set; }

    }

}
