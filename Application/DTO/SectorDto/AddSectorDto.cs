using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.SectorDto
{
    public class AddSectorDto
    {
        public int Id { get; set; }

        public string SectorName { get; set; }

    //    public int SceneId { get; set; }

        public string SeatCapacity { get; set; }

        public string RowsTotalNumber { get; set; }
    }
}
