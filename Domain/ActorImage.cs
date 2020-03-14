using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class ActorImage : BaseEntity
    {
        public int Id { get; set; }

        public string ActorImageAlt { get; set; }

        public string ActorImagePath { get; set; }

        public int ActorId { get; set; }

        public Actor Actor{ get; set; }
    }
}
