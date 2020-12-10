using Application.DTO.ImageDto;
using Application.DTO.ShowDto;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.ActorDto
{
    public class GetActorDto
    {
        public int Id { get; set; }

        public string ActorFirstName { get; set; }

        public string ActorLastName { get; set; }

        public string ActorBiography { get; set; }

        public IEnumerable<GetImageDto> ShowImageDto { get; set; }

        public IEnumerable<ShowBaseInfoDto> ActorInShow { get; set; }
    }
}
