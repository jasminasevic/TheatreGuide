﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Queries
{
    public class RepertoireQuery : BaseQuery
    {
        public string ShowTitle { get; set; }

        public int TheatreId { get; set; }

        public string TheatreName { get; set; }

        public string SceneName { get; set; }

        public string Type { get; set; }

        public string PastShows { get; set; }
    }
}
