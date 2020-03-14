using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class TheatreImage : BaseEntity
    {
        public int Id { get; set; }

        public string TheatreImageAlt { get; set; }

        public string TheatreImagePath { get; set; }

        public int TheatreId { get; set; }

        public Theatre Theatre { get; set; }
    }
}
