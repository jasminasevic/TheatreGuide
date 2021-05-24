using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Interfaces
{
    public interface IUseCase
    {
        int Id { get; }

        string Name { get; }

        public IEnumerable<Role> Roles { get; }

        bool ContainsSensitiveData { get; }
    }

    
}

