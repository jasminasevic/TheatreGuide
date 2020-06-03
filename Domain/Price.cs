using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class Price : BaseEntity
    {
       // public int Id { get; set; }

        public int RepertoireId { get; set; }

        public Repertoire Repertoire { get; set; }

        public int SubsceneId { get; set; }

        public Subscene Subscene { get; set; }

        public double TicketPrice { get; set; }
    }
}
