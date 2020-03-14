using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class ShowImage : BaseEntity
    {
        public int Id { get; set; }

        public string ShowImagePath { get; set; }

        public string ShowImageAlt { get; set; }

        public int ShowId { get; set; }

        public Show Show { get; set; }
    }
}
