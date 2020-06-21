using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.SubsceneDto
{
    public class GetSubsceneDto
    {
        public int Id { get; set; }

        public string TheatreName { get; set; }

        public string SceneName { get; set; }

        public string SubsceneCategoryName { get; set; }

        public int SeatCapacity { get; set; }

        public int RowsTotalNumber { get; set; }
    }
}
