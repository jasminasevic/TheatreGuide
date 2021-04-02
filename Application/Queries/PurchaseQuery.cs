using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Queries
{
    public class PurchaseQuery : BaseQuery
    {
        public string ShowTitle { get; set; }

        public string TheatreId { get; set; }

        public string Type { get; set; }
    }
}
