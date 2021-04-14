using Application.DTO.SeatDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.SectorDto
{
    public class GetSectorWithUnavailableSeatsDto
    {
        public int Id { get; set; }

        public string SectorName { get; set; }

        public int SeatCapacity { get; set; }

        public int RowsTotalNumber { get; set; }

        public IEnumerable<UnavailableSeatsDto> UnavailableSeatsDto { get; set; }
    }
}
