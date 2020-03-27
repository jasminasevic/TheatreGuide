using Application.DTO.ImageDto;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.ActorDto
{
    public class ShowActorDto
    {
        public int Id { get; set; }

        public string ActorFirstName { get; set; }

        public string ActorLastName { get; set; }

        public string ActorBiography { get; set; }

        public IEnumerable<ShowImageDto> ShowImageDto { get; set; }
    }
}
