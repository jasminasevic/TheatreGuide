using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfDataAccess.Configurations
{
    public class ActorImageConfiguration : IEntityTypeConfiguration<ActorImage>
    {
        public void Configure(EntityTypeBuilder<ActorImage> builder)
        {
            builder.Property(ai => ai.ActorImagePath)
                .IsRequired();

            builder.HasIndex(ai => ai.ActorImagePath)
                .IsUnique();
        }
    }
}
