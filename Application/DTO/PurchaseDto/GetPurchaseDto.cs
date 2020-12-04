using Application.DTO.PriceDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.PurchaseDto
{
    public class GetPurchaseDto
    {
        public int Id { get; set; }

        public string ShowName { get; set; }

        public DateTime Date { get; set; }

        public string UserName { get; set; }

        public string TheatreName { get; set; }

        public DateTime CreatedAt { get; set; }

        public IEnumerable<GetPriceBasicDto> GetPriceBasicDtos { get; set; }
    }
}
