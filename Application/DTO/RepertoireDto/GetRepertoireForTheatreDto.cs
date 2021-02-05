using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.RepertoireDto
{
    public class GetRepertoireForTheatreDto
    {
        public int Id { get; set; }

        public bool IsPremiere { get; set; }

        public DateTime ShowDate { get; set; }

        public int ShowId { get; set; }

        public string ShowName { get; set; }
    }
}
