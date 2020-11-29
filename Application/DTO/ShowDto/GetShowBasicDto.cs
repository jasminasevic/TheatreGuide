using Application.DTO.SectorDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.ShowDto
{
    public class GetShowBasicDto
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public int TheatreId { get; set; }

        public string TheatreName { get; set; }

        public int SceneId { get; set; }

        public string SceneName { get; set; }

        public IEnumerable<GetSectorDto> GetSectorDtos { get; set; }
    }
}
