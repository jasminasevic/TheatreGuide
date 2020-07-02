using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.PriceDto
{
    public class AddPriceDto
    {

        public int ShowId { get; set; }

        public int SectorId { get; set; }

        public double TicketPrice { get; set; }
    }
}
