using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.PurchaseDto
{
    public class PurchaseDto
    {
        public int Id { get; set; }

        public int RepertoireId { get; set; }

        public int UserId { get; set; }

        public int SectorId { get; set; }

        public int RowNumber { get; set; }

        public int SeatNumber { get; set; }

        public string Entrance { get; set; }
    }
}
