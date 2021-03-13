using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Queries
{
    public class ShowQuery : BaseQuery
    {
        public string Title { get; set; }

        public string Type { get; set; }

        public string ShowId { get; set; }

        public string TheatreId { get; set; }

        public string ActorId { get; set; }

        public string DirectorId { get; set; }

        public string CategoryId { get; set; }
    }
}
