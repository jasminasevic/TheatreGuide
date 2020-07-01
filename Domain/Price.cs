using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class Price : BaseEntity
    {
       
        public int RepertoireId { get; set; }

        public Repertoire Repertoire { get; set; }

        public int SectorId { get; set; }

        public Sector Sector { get; set; }

        public double TicketPrice { get; set; }
    }
}
