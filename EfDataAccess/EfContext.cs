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
        public DbSet<Actor> Actors { get; set; }

        public DbSet<ActorImage> ActorImages { get; set; }

        public DbSet<ActorShow> ActorShows { get; set; }

        public DbSet<Category> Categories { get; set; }

        public DbSet<Currency> Currencies { get; set; }

        public DbSet<Director> Directors { get; set; }

        public DbSet<Purchase> Purchases { get; set; }

        public DbSet<Price> Prices { get; set; }

        public DbSet<Repertoire> Repertoires { get; set; }

        public DbSet<Role> Roles { get; set; }

        public DbSet<Scene> Scenes { get; set; }

        public DbSet<Sector> Sectors { get; set; }

        public DbSet<SectorSoldTickets> SectorSoldTickets { get; set; }

        public DbSet<Show> Shows { get; set; }

        public DbSet<ShowFollower> ShowFollowers { get; set; }
       
        public DbSet<ShowImage> ShowImages { get; set; }

        public DbSet<Theatre> Theatres { get; set; }

        public DbSet<TheatreImage> TheatreImages { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<UseCaseLog> UseCaseLogs { get; set; }

        public DbSet<Writer> Writers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //local connection string
            optionsBuilder.UseSqlServer(@"Data Source=DESKTOP-5JPRF7N\SQLEXPRESS;Initial Catalog=TheatreGuide;Integrated Security=True");
            //azure connection string
            //optionsBuilder.UseSqlServer(@"Server=tcp:theatre-guide.database.windows.net,1433;Initial Catalog=theatre-guide;Persist Security Info=False;User ID=theatre-guide;Password=diplomskiRad!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ActorConfiguration());
            modelBuilder.ApplyConfiguration(new ActorImageConfiguration());
            modelBuilder.ApplyConfiguration(new ActorShowConfiguration());
            modelBuilder.ApplyConfiguration(new CategoryConfiguration());
            modelBuilder.ApplyConfiguration(new CurrencyConfiguration());
            modelBuilder.ApplyConfiguration(new DirectorConfiguration());
            modelBuilder.ApplyConfiguration(new PriceConfiguration());
            modelBuilder.ApplyConfiguration(new PurchaseConfiguration());
            modelBuilder.ApplyConfiguration(new RepertoireConfiguration());
            modelBuilder.ApplyConfiguration(new RoleConfiguration());
            modelBuilder.ApplyConfiguration(new SceneConfiguration());
            modelBuilder.ApplyConfiguration(new SectorConfiguration());
            modelBuilder.ApplyConfiguration(new SectorSoldTicketsConfiguration());
            modelBuilder.ApplyConfiguration(new ShowConfiguration());
            modelBuilder.ApplyConfiguration(new ShowFollowerConfiguration());
            modelBuilder.ApplyConfiguration(new ShowImageConfiguration());
            modelBuilder.ApplyConfiguration(new TheatreConfiguration());
            modelBuilder.ApplyConfiguration(new TheatreImageConfiguration());
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new WriterConfiguration());

        }
    }
}
