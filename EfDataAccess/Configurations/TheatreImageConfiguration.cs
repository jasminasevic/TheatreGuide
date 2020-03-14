using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfDataAccess.Configurations
{
    public class TheatreImageConfiguration : IEntityTypeConfiguration<TheatreImage>
    {
        public void Configure(EntityTypeBuilder<TheatreImage> builder)
        {
            builder.Property(ti => ti.TheatreImagePath)
                .IsRequired();

            builder.HasIndex(ti => ti.TheatreImagePath)
                .IsUnique();
        }
    }
}
