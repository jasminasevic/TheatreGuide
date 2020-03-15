using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfDataAccess.Configurations
{
    public class ActorConfiguration : IEntityTypeConfiguration<Actor>
    {
        public void Configure(EntityTypeBuilder<Actor> builder)
        {
            builder.Property(a => a.ActorFirstName)
                .IsRequired()
                .HasMaxLength(30);

            builder.Property(a => a.ActorFirstName)
                .IsRequired()
                .HasMaxLength(30);

            builder.Property(a => a.ActorBiography)
                .IsRequired();

            builder.HasMany(a => a.ActorShows)
                .WithOne(acts => acts.Actor)
                .HasForeignKey(acts => acts.ActorId)
                .OnDelete(DeleteBehavior.Restrict);

                
        }
    }
}
