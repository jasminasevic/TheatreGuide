using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class Sector : BaseEntity
    {
        public int Id { get; set; }

        public string SectorName { get; set; }

        public int SceneId { get; set; }

        public Scene Scene { get; set; }

        public int SeatCapacity { get; set; }

        public int RowsTotalNumber { get; set; }

        public ICollection<Price> Prices { get; set; }

        public ICollection<Purchase> Purchases { get; set; }

        public ICollection<SectorSoldTickets> SectorSoldTickets { get; set; }


    }
}
