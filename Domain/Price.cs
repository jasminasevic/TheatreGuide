using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class Price : BaseEntity
    {
       
        public int ShowId { get; set; }

        public Show Show { get; set; }

        public int SectorId { get; set; }

        public Sector Sector { get; set; }

        public double TicketPrice { get; set; }
    }
}
