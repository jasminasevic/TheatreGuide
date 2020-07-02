using Application.DTO.PriceDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.RepertoireDto
{
    public class RepertoireDto
    {
        public int Id { get; set; }

        public int ShowId { get; set; }

        public int TheatreId { get; set; }

        public DateTime ShowDate { get; set; }

        public int SoldTicketNumber { get; set; }

        public string StartTime { get; set; }

    }
}
