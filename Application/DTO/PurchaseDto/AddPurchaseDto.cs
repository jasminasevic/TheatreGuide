using Application.DTO.SeatDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.PurchaseDto
{
    public class AddPurchaseDto
    {
        public int Id { get; set; }

        public int RepertoireId { get; set; }

        public int UserId { get; set; }

        public IEnumerable<AddSeatDto> AddSeatDtos { get; set; }
    }
}
