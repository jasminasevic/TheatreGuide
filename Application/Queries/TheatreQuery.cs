using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Queries
{
    public class TheatreQuery : BaseQuery
    {
        public string Name { get; set; }

        public string Email { get; set; }

        public string Location { get; set; }

        public string Type { get; set; }
    }
}
