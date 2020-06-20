using Application.DTO.SubsceneDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.SceneDto
{
    public class GetSceneDto
    {
        public int Id { get; set; }

        public string SceneName { get; set; }

        public string TheatreName { get; set; }

        public IEnumerable<GetSubsceneDto> GetSubsceneDtos { get; set; }
    }
}
