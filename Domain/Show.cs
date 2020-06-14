using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Domain
{
    public class Show : BaseEntity
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string ShowDescription { get; set; }

        public DateTime PremiereDate { get; set; }

        public int Duration { get; set; }

        public bool ContentAdvisory { get; set; } = false;

        public int CategoryId { get; set; }

        public Category Category { get; set; }

        public int DirectorId { get; set; }

        public Director Director { get; set; }

        public int WriterId { get; set; }

        public Writer Writer { get; set; }

        public int TheatreId { get; set; }

        public Theatre Theatre { get; set; }

        public ICollection<ActorShow> ActorShows { get; set; }

        public ICollection<ShowImage> ShowImages { get; set; }

        public ICollection<ShowFollower> ShowFollowers { get; set; }

        public ICollection<Repertoire> Repertoires { get; set; }
    }
}
