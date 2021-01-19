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

        public int TheatreId { get; set; }

        public Theatre Theatre { get; set; }


        public DateTime Date { get; set; }

        public bool IsPremiere { get; set; } = false;

        public ICollection<Price> Prices { get; set; }

        public ICollection<Purchase> Purchases { get; set; }

        public ICollection<SectorSoldTickets> SectorSoldTickets { get; set; }
    }
}
