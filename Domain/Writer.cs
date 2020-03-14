using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class Writer : BaseEntity
    {
        public int Id { get; set; }

        public string WriterFirstName { get; set; }

        public string WriterLastName { get; set; }

        public string WriterBiography { get; set; }

        public ICollection<Show> Shows { get; set; }
    }
}
