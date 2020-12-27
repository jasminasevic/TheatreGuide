using Application.DTO.ImageDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.ShowDto
{
    public class ShowBaseInfoDto
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string CategoryName { get; set; }

        public IEnumerable<GetImageDto> ShowImageDtos { get; set; }
    }
}
