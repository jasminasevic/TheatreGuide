using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class City : BaseEntity
    {
        public int Id { get; set; }

        public string CityName { get; set; }

        public ICollection<User> Users { get; set; }

        public ICollection<Theatre> Theatres { get; set; }
    }
}
