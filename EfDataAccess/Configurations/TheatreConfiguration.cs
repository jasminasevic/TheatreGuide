using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfDataAccess.Configurations
{
    public class TheatreConfiguration : IEntityTypeConfiguration<Theatre>
    {
        public void Configure(EntityTypeBuilder<Theatre> builder)
        {
            builder.Property(t => t.TheatreName)
                .IsRequired()
                .HasMaxLength(100);

            builder.Property(a => a.Location)
               .IsRequired();

        }
    }
}
