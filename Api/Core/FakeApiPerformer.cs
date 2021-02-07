using Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Core
{
    public class FakeApiPerformer : IApplicationPerformer
    {
        public int Id => 1;

        public string Identity => "Test Api User";

        public Role Role => Role.User;
    }

    public class FakeAdminPerformer : IApplicationPerformer
    {
        public int Id => 2;

        public string Identity => "Test Api Admin";

        public Role Role => Role.Admin;
    }
}
