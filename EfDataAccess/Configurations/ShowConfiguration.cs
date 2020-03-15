using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfDataAccess.Configurations
{
    public class ShowConfiguration : IEntityTypeConfiguration<Show>
    {
        public void Configure(EntityTypeBuilder<Show> builder)
        {
            builder.Property(s => s.Title)
                .IsRequired()
                .HasMaxLength(70);

            builder.Property(s => s.ShowDescription)
                .IsRequired();

            builder.Property(s => s.PremiereDate)
                .IsRequired();

            builder.Property(s => s.Duration)
                .IsRequired();

            builder.HasMany(s => s.ActorShows)
                .WithOne(acts => acts.Show)
                .HasForeignKey(acts => acts.ShowId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasMany(s => s.ShowFollowers)
                .WithOne(uf => uf.Show)
                .HasForeignKey(uf => uf.ShowId)
                .OnDelete(DeleteBehavior.Restrict);

            
        }
    }
}
