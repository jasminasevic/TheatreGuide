using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class Currency : BaseEntity
    {
        public int Id { get; set; }

        public string CurrencyName { get; set; }

        public ICollection<Price> Prices { get; set; }
    }
}
