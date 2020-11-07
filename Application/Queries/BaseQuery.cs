﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Queries
{
    public class BaseQuery
    {
        public int PerPage { get; set; }

        public int PageNumber { get; set; }

        public string SortOrder { get; set; }

        public string SearchQuery { get; set; }
    }
}
