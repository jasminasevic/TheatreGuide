using Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Core
{
    public class AnonymusPerformer : IApplicationPerformer
    {
        public int Id => 0;

        public string Identity => "Anonymus Performer";

        public Role Role => Role.Anonymus;
    }
}
