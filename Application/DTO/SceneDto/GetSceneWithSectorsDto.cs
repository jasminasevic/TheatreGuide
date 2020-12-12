using Application.DTO.SectorDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.SceneDto
{
    public class GetSceneWithSectorsDto
    {
        public int Id { get; set; }

        public string SceneName { get; set; }

        public IEnumerable<AddSectorDto> AddSectorDtos { get; set; }
    }
}
