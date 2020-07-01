using Application.DTO.SectorDto;
using System;
using System.Collections.Generic;
using System.Text;


namespace Application.DTO.SceneDto
{
    public class SceneDto
    {
        public int Id { get; set; }

        public string SceneName { get; set; }

        public int TheatreId { get; set; }

        public IEnumerable<AddSectorDto> AddSectorDtos{ get; set; }
    }
}
