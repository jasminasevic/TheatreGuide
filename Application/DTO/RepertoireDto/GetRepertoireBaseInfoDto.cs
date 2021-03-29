using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.RepertoireDto
{
    public class GetRepertoireBaseInfoDto
    {
        public int Id { get; set; }

        public int ShowId { get; set; }

        public string ShowName { get; set; }

        public int TheatreId { get; set; }

        public int SceneId { get; set; }

        public string SceneName { get; set; }

        public bool IsPremiere { get; set; }

        public DateTime ShowDate { get; set; }
    }
}
