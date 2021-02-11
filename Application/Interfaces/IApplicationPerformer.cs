using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Interfaces
{
    public interface IApplicationPerformer
    {
        public int Id { get; }

        public string Identity { get; }

        public Role Role { get;  }
    }

    public enum Role
    {
        Anonymus,
        Admin,
        Theatre,
        User
    }
}
