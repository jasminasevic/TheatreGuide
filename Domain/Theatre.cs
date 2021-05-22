using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class Theatre : BaseEntity
    {
        public int Id { get; set; }

        public string TheatreName { get; set; }

        public string TheatreDescription { get; set; }

        public string ContactTelephone { get; set; }

        public string ContactEmail { get; set; }

        public string WorkingHours { get; set; }

        public bool IsVisible { get; set; } = false;

        public string Location { get; set; }

        public decimal Longitude { get; set; }

        public decimal Latitude { get; set; }

        public ICollection<Scene> Scenes { get; set; }

        public ICollection<TheatreImage> TheatreImages { get; set; }

        public ICollection<Show> Shows { get; set; }

        public ICollection<Repertoire> Repertoires { get; set; }
    }
}
