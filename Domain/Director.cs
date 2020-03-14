using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class Director : BaseEntity
    {
        public int Id { get; set; }

        public string DirectorFirstName { get; set; }

        public string DirectorLastName { get; set; }

        public string DirectorBiography { get; set; }

        public ICollection<Show> Shows { get; set; }
    }
}
