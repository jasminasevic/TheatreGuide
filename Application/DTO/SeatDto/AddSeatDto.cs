using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.SeatDto
{
    public class AddSeatDto
    {
        public int SectorId { get; set; }

        public int SeatNumber { get; set; }

        public int RowNumber { get; set; }

        public string Entrance { get; set; }

    }
}
