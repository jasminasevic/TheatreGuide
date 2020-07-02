using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class Scene : BaseEntity
    {
        public int Id { get; set; }

        public string SceneName { get; set; }

        public int TheatreId { get; set; }

        public Theatre Theatre { get; set; }

        public ICollection<Purchase> Purchases { get; set; }

        public ICollection<Show> Shows { get; set; }

        public ICollection<Sector> Sectors { get; set; }
    }
}
