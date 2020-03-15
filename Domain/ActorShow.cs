using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class ActorShow : BaseEntity
    {
        public int? ActorId { get; set; }

        public Actor Actor { get; set; }

        public int? ShowId { get; set; }

        public Show Show { get; set; }

        public string ActorRoleName { get; set; }

        public string ActorRoleDescription { get; set; }
    }
}
