using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class Address : BaseEntity
    {
        public int Id { get; set; }

        public string Location { get; set; }

        public decimal Longitude { get; set; }

        public decimal Latitude { get; set; }

        public ICollection<Theatre> Theatres { get; set; }
    }
}
