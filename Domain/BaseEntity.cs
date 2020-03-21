using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class BaseEntity
    {
        public DateTime CreatedAt { get; set; } = DateTime.Now;

        public DateTime ? ModifiedAt { get; set; }

        public bool IsDeleted { get; set; } = false;

        public bool IsActive { get; set; } = true;
    }
}
