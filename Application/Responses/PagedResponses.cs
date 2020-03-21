using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Responses
{
    public class PagedResponses<T>
    {
        public int TotalCount { get; set; }

        public int PagesCount { get; set; }

        public int PageNumber { get; set; }

        public IEnumerable<T> Data { get; set; }
    }
}
