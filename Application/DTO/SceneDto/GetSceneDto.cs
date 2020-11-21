using Application.DTO.SectorDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.SceneDto
{
    public class GetSceneDto
    {
        public int Id { get; set; }

        public string SceneName { get; set; }

        public int TheatreId { get; set; }

        public string TheatreName { get; set; }

        public IEnumerable<GetSectorDto> GetSectorDtos { get; set; }
    }
}
