﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.SectorDto
{
    public class GetSectorDto
    {
        public int Id { get; set; }

        public string SectorName { get; set; }

        public int SeatCapacity { get; set; }

        public int RowsTotalNumber { get; set; }
    }
}
