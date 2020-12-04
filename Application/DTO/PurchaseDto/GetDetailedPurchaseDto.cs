using Application.DTO.PriceDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.PurchaseDto
{
    public class GetDetailedPurchaseDto
    {
        public int Id { get; set; }

        public int ShowId { get; set; }

        public string ShowName { get; set; }

        public DateTime Date { get; set; }

        public int CategoryId { get; set; }

        public string Category { get; set; }

        public int UserId { get; set; }

        public string UserName { get; set; }

        public int TheatreId { get; set; }

        public string TheatreName { get; set; }

        public int SceneId { get; set; }

        public string SceneName { get; set; }

        public string SectorName { get; set; }

        public int SeatNumber { get; set; }

        public int RowNumber { get; set; }

        public string Entrance { get; set; }

        public DateTime PurchasedAt { get; set; }

        public IEnumerable<GetPriceBasicDto> GetPriceBasicDtos { get; set; }
    }
}
