using Application.DTO.SectorDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.PriceDto
{
    public class GetPriceDto
    {
        public double Price { get; set; }

        public int ShowId { get; set; }

        public int SectorId { get; set; }

        public string SectorName { get; set; }

        public int SeatCapacity { get; set; }

        public int RowsTotalNumber { get; set; }

    }
}
