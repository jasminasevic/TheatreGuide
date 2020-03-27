using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Queries
{
    public class ActorQuery : BaseQuery
    {
        public int Id { get; set; }

        public string ActorFirstName { get; set; }

        public string ActorLastName { get; set; }
    }
}
