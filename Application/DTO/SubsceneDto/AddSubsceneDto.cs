using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.SubsceneDto
{
    public class AddSubsceneDto
    {
        public int Id { get; set; }

        public int SceneId { get; set; }

        public int SeatCapacity { get; set; }

        public int SubsceneCategoryId { get; set; }

        public int RowsTotalNumber { get; set; }
    }
}
