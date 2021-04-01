using Application.DTO.PriceDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.RepertoireDto
{
    public class GetRepertoireForEditDto
    {
        public int Id { get; set; }

        public int ShowId { get; set; }

        public string ShowName { get; set; }

        public int TheatreId { get; set; }

        public string SceneName { get; set; }

        public bool IsPremiere { get; set; }

        public DateTime ShowDate { get; set; }

        public IEnumerable<GetPriceDto> GetPriceDtos { get; set; }
    }
}
