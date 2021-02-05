using Application.DTO.ImageDto;
using Application.DTO.RepertoireDto;
using Application.DTO.SceneDto;
using Application.DTO.ShowDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.TheatreDto
{
    public class GetTheatreDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string WorkingHours { get; set; }

        public string Telephone { get; set; }

        public string Email { get; set; }

        public string Description { get; set; }

        public IEnumerable<GetImageDto> ShowImageDtos { get; set; }

        public string Location { get; set; }

        public decimal Longitude { get; set; }

        public decimal Latitude { get; set; }

        public IEnumerable<GetSceneWithSectorsDto> GetSceneWithSectorsDtos { get; set; }

        public IEnumerable<ShowBaseInfoDto> ShowBaseInfoDtos  { get; set; }

        public IEnumerable<GetUpcomingShowsDto> GetUpcomingShowsDtos { get; set; }

        public IEnumerable<GetRepertoireForTheatreDto> GetRepertoireForTheatreDtos { get; set; }

    }
}
