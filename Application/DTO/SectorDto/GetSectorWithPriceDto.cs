using Application.DTO.PriceDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.SectorDto
{
    public class GetSectorWithPriceDto
    {

        public int SectorId { get; set; }

        public string SectorName { get; set; }

        public double TicketPrice { get; set; }

        public IEnumerable<GetPriceBasicDto> GetPriceBasicDtos { get; set; }
    }
}
