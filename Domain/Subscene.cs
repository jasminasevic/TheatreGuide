using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class Subscene : BaseEntity
    {
        public int Id { get; set; }

        public int SceneId { get; set; }

        public Scene Scene { get; set; }

        public int SeatCapacity { get; set; }

        public int RowsTotalNumber { get; set; }

        public int SubsceneCategoryId { get; set; }

        public SubsceneCategory SubsceneCategory { get; set; }

        public ICollection<Price> Prices { get; set; }

        public ICollection<Purchase> Purchases { get; set; }
    }
}
