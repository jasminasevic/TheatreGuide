using Application.DTO.ImageDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.TheatreDto
{
    public class TheatreForEditDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string WorkingHours { get; set; }

        public string Telephone { get; set; }

        public string Email { get; set; }

        public string Description { get; set; }

        public IEnumerable<GetImageDto> ShowImageDtos { get; set; }

        public string Location { get; set; }

        public decimal Longitude { get; set; }

        public decimal Latitude { get; set; }

        public bool IsVisible { get; set; }
    }
}
