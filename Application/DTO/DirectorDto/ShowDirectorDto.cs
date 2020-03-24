using Application.DTO.ShowDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.DirectorDto
{
    public class ShowDirectorDto
    {
        public int Id { get; set; }

        public string DirectorFirstName { get; set; }

        public string DirectorLastName { get; set; }

        public string DirectorBiography { get; set; }

        public IEnumerable<ShowBaseInfoDto> showBaseInfoDtos { get; set; }
    }
}
