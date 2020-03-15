using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class ShowFollower : BaseEntity
    {
        public int? UserId { get; set; }

        public User User { get; set; }

        public int? ShowId { get; set; }

        public Show Show { get; set; }
    }
}
