using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class Actor : BaseEntity
    {
        public int Id { get; set; }

        public string ActorFirstName { get; set; }

        public string ActorLastName { get; set; }

        public string ActorBiography { get; set; }

        public ICollection<ActorShow> ActorShows { get; set; }

        public ICollection<ActorImage> ActorImages { get; set; }

    }
}
