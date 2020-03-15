using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class Purchase : BaseEntity
    {
        public int Id { get; set; }

        public int RepertoireId { get; set; }

        public Repertoire Repertoire { get; set; }

        public int UserId { get; set; }

        public User User { get; set; }

        public int SeatNumber { get; set; }
    }
}
