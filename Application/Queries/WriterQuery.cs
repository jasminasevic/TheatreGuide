using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Queries
{
    public class WriterQuery : BaseQuery
    {
        public int Id { get; set; }

        public string WriterFirstName { get; set; }

        public string WriterLastName { get; set; }

        public string WriterBiography { get; set; }
    }
}
