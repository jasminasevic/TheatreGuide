using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class Entrance : BaseEntity
    {
        public int Id { get; set; }

        public string EntranceName { get; set; }

        public ICollection<Purchase> Purchases { get; set; }
    }
}
