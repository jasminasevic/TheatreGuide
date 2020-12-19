using Application.DTO.ImageDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.ShowDto
{
    public class GetPopularShowsDto
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public IEnumerable<GetImageDto> ShowImage { get; set; }

        public int TheatreId { get; set; }

        public string TheatreName { get; set; }

        public int FollowersNumber { get; set; }
    }
}
