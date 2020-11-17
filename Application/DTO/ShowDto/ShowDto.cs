using Application.DTO.ActorDto;
using Application.DTO.PriceDto;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.ShowDto
{
    public class ShowDto
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public int Duration { get; set; }

        public DateTime PremiereDate { get; set; }

        public bool ContentAdvisory { get; set; }

        public int CategoryId { get; set; }

        public int DirectorId { get; set; }

        public string Writer { get; set; }

        public  int TheatreId { get; set; }

        public int SceneId { get; set; }

        public IEnumerable<AddPriceDto> AddPriceDtos { get; set; }

        public IEnumerable<ActorShowDto> ActorShowDtos { get; set; }

        public IEnumerable<IFormFile> ShowImages { get; set; }

    }
}
