using Application.DTO.ImageDto;
using Application.DTO.ShowDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.ShowFollowerDto
{
    public class GetFollowedShowsDto
    {

        public int Id { get; set; }

        public string Title { get; set; }

        public string Theatre { get; set; }

        public int TheatreId { get; set; }

        public IEnumerable<GetImageDto> ShowImageDtos { get; set; }
    }
}
