using Application.DTO.ShowDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.WriterDto
{
    public class ShowWriterDto
    {
        public int Id { get; set; }

        public string WriterFirstName { get; set; }

        public string WriterLastName { get; set; }

        public string WriterBiography { get; set; }

        public IEnumerable<ShowBaseInfoDto> showBaseInfoDto { get; set; }
    }
}
