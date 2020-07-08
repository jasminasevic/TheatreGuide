using Application.DTO.PriceDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.PurchaseDto
{
    public class GetPurchaseDto
    {
        public string ShowName { get; set; }

        public DateTime Date { get; set; }

        public string UserName { get; set; }

        public string TheatreName { get; set; }

        public string SceneName { get; set; }

        public string SectorName { get; set; }

        public int SeatNumber { get; set; }

        public int RowNumber { get; set; }

        public string Entrance { get; set; }

        public double Price { get; set; }
    }
}
