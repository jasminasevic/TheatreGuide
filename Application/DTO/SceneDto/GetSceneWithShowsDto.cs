using Application.DTO.SectorDto;
using Application.DTO.ShowDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.SceneDto
{
    public class GetSceneWithShowsDto
    {
        public int Id { get; set; }

        public string SceneName { get; set; }

        public int TheatreId { get; set; }

        public string TheatreName { get; set; }

        public IEnumerable<GetSectorDto> GetSectorDtos { get; set; }

        public IEnumerable<ShowBaseInfoDto> ShowBaseInfoDtos { get; set; }
    }
}
