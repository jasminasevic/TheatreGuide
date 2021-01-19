using Application.DTO.ImageDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.RepertoireDto
{
    public class GetUpcomingPremieresDto
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public IEnumerable<GetImageDto> ShowImage { get; set; }

        public int TheatreId { get; set; }

        public string TheatreName { get; set; }

        public bool IsPremiere { get; set; }

        public string Category { get; set; }

        public DateTime ShowDate { get; set; }
    }
}
