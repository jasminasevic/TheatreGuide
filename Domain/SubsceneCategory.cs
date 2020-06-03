using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class SubsceneCategory : BaseEntity
    {
        public int Id { get; set; }

        public string SubsceneCategoryName { get; set; }

        public ICollection<Subscene> Subscenes { get; set; }

        public ICollection<Price> Prices { get; set; }
    }
}
