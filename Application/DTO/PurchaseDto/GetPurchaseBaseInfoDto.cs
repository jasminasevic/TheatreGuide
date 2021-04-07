using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.PurchaseDto
{
    public class GetPurchaseBaseInfoDto
    {
        public int Id { get; set; }

        public int ShowId { get; set; }

        public string ShowName { get; set; }

        public int RepertoireId { get; set; }

        public DateTime Date { get; set; }

        public DateTime CreatedAt { get; set; }

        public string SectorName { get; set; }
    }
}
