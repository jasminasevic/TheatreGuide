using Application.DTO.PriceDto;
using Application.DTO.SectorDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.RepertoireDto
{
    public class GetRepertoireDto
    {
        public int Id { get; set; }

        public int ShowId { get; set; }

        public string ShowName { get; set; }

        public int TheatreId { get; set; }

        public string TheatreName { get; set; }

        public int SceneId { get; set; }

        public string SceneName { get; set; }

        public DateTime ShowDate { get; set; }

        public int SoldTicketsNumber { get; set; }

        public IEnumerable<GetPriceDto> GetPriceDtos { get; set; }


    }
}
