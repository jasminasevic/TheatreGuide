using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.AddressDto
{
    public class AddressDto
    {
        public int Id { get; set; }

        public string Location { get; set; }

        public decimal Longitude { get; set; }

        public decimal Latitude { get; set; }
    }
}
