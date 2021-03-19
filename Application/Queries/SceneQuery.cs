using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Queries
{
    public class SceneQuery : BaseQuery
    {
        public string SceneName { get; set; }

        public string TheatreName { get; set; }

        public int TheatreId { get; set; }

        public string Type { get; set; }
    }
}
