using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
     public class Repertoire : BaseEntity
     {
        public int Id { get; set; }

        public int ShowId { get; set; }

        public Show Show { get; set; }

        public DateTime Date { get; set; }

        public int TheatreId { get; set; }

        public Theatre Theatre { get; set; }

        public int NumberOfSoldTickets { get; set; } = 0;

        public ICollection<Purchase> Purchases { get; set; }
    }
}
