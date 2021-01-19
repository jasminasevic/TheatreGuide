using Application.DTO.SectorDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.ShowDto
{
    public class GetShowForRepertoireDto
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public int TheatreId { get; set; }

        public string Theatre { get; set; }

        public string Scene { get; set; }

        public IEnumerable<GetSectorDto> GetSectorDtos { get; set; }
    }
}
