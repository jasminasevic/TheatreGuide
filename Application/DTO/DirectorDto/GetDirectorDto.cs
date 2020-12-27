using Application.DTO.ShowDto;
using Application.DTO.TheatreDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.DirectorDto
{
    public class GetDirectorDto
    {
        public int Id { get; set; }

        public string DirectorFirstName { get; set; }

        public string DirectorLastName { get; set; }

        public string DirectorBiography { get; set; }

        public IEnumerable<ShowBaseInfoDto> ShowBaseInfoDtos { get; set; }

        public IEnumerable<TheatreBasicDto> TheatreBasicDtos { get; set; }
    }
}
