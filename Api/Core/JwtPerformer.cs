using Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Core
{
    public class JwtPerformer : IApplicationPerformer
    {
        public int Id {get; set;}

        public string Identity { get; set; }

        public Role Role { get; set; }
    }
}
