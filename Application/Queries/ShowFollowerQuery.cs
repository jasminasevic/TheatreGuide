using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Queries
{
    public class ShowFollowerQuery : BaseQuery
    {
        public string Type { get; set; }

        public int TheatreId { get; set; }

        public string UserId { get; set; }

        public string ShowId { get; set; }
    }
}
