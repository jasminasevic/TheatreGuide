using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.ActorDto
{
    public class ActorShowDto
    {
        public int ActorId { get; set; }

        public string ActorFirstName { get; set; }

        public string ActorLastName { get; set; }

        public string ActorRoleName { get; set; }

        public string ActorRoleDescription { get; set; }
    }
}
