using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class SectorSoldTickets
    {
        public int RepertoireId { get; set; }

        public Repertoire Repertoire { get; set; }

        public int SectorId { get; set; }

        public Sector Sector { get; set; }

        public int NumberOfSoldTickets { get; set; } = 0;
    }
}
