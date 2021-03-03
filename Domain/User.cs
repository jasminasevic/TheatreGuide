using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class User : BaseEntity
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public int RoleId { get; set; }

        public Role Role { get; set; }

        public int? TheatreId { get; set; }

        public Theatre Theatre { get; set; }

        public ICollection<ShowFollower> ShowFollowers { get; set; }

        public ICollection<Purchase> Purchases { get; set; }

        public StatusType Status { get; set; } = StatusType.Pending;

        public enum StatusType 
        { 
            Approved,
            Declined,
            Pending
        }

    }
}
