using Domain;
using EfDataAccess.Configurations;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfDataAccess
{
    public class EfContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public DbSet<Role> Roles { get; set; }

        public DbSet<City> Cities { get; set; }

        public DbSet<Category> Categories { get; set; }

        public DbSet<Writer> Writers { get; set; }

        public DbSet<Director> Directors { get; set; }

        public DbSet<Show> Shows { get; set; }

        public DbSet<Theatre> Theatres { get; set; }

        public DbSet<Actor> Actors { get; set; }

        public DbSet<ActorShow>  ActorShows { get; set; }

        public DbSet<ActorImage> ActorImages { get; set; }

        public DbSet<ShowImage> ShowImages { get; set; }

        public DbSet<TheatreImage> TheatreImages { get; set; }

        public DbSet<Scene> Scenes  { get; set; }



        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=DESKTOP-5JPRF7N\SQLEXPRESS;Initial Catalog=TheatreGuide;Integrated Security=True");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new RoleConfiguration());
            modelBuilder.ApplyConfiguration(new CityConfiguration());
            modelBuilder.ApplyConfiguration(new CategoryConfiguration());
            modelBuilder.ApplyConfiguration(new WriterConfiguration());
            modelBuilder.ApplyConfiguration(new DirectorConfiguration());
            modelBuilder.ApplyConfiguration(new ShowConfiguration());
            modelBuilder.ApplyConfiguration(new TheatreConfiguration());
            modelBuilder.ApplyConfiguration(new ActorConfiguration());
            modelBuilder.ApplyConfiguration(new ActorShowConfiguration());
            modelBuilder.ApplyConfiguration(new ShowImageConfiguration());
            modelBuilder.ApplyConfiguration(new ActorImageConfiguration());
            modelBuilder.ApplyConfiguration(new TheatreImageConfiguration());
            modelBuilder.ApplyConfiguration(new SceneConfiguration());
            
        }
    }
}
