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

        public int RowNumber { get; set; }

        public int SceneId { get; set; }

        public Scene Scene { get; set; }

        public int SectorId { get; set; }

        public Sector Sector { get; set; }

    }
}
