using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.SubsceneDto
{
    public class GetSubsceneDto
    {
        public int Id { get; set; }

        public int SeatCapacity { get; set; }

        public string SubsceneCategoryName { get; set; }

        public int RowsTotalNumber { get; set; }
    }
}
