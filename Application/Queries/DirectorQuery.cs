using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Queries
{
    public class DirectorQuery : BaseQuery
    {
        public int Id { get; set; }

        public string DirectorFirstName { get; set; }

        public string DirectorLastName { get; set; }

        public string DirectorBiography { get; set; }
    }
}
