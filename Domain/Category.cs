﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class Category : BaseEntity
    {
        public int Id { get; set; }

        public string CategoryName { get; set; }

        public ICollection<Show> Shows { get; set; }
    }
}
