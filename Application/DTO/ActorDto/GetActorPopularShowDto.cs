using Application.DTO.ShowDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.ActorDto
{
    public class GetActorPopularShowDto
    {
        public IEnumerable<GetPopularShowsDto> GetPopularShowsDtos { get; set; }
    }
}
