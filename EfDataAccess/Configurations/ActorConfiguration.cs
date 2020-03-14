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
            builder.Property(b => b.ActorFirstName)
                .IsRequired()
                .HasMaxLength(30);

            builder.Property(b => b.ActorFirstName)
                .IsRequired()
                .HasMaxLength(30);

            builder.Property(b => b.ActorBiography)
                .IsRequired();
        }
    }
}
