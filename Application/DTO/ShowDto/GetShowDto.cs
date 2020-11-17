﻿using Application.DTO.ActorDto;
using Application.DTO.ImageDto;
using Application.DTO.PriceDto;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.ShowDto
{
    public class GetShowDto
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Category { get; set; }

        public string Description { get; set; }

        public string Writer { get; set; }

        public string DirectorFirstName { get; set; }

        public string DirectorLastName { get; set; }

        public string Scene { get; set; }

        public string Theatre { get; set; }

        public int Duration { get; set; }

        public DateTime PremiereDate{ get; set; }

        public bool ContentAdvisory { get; set; }

        public int FollowersNumber { get; set; }

        public IEnumerable<ActorShowDto> ActorShowDtos { get; set; }

        public IEnumerable<GetImageDto> ShowImageDtos { get; set; }

        public IEnumerable<GetPriceDto> GetPriceDtos { get; set; }
    }
}
