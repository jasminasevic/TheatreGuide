using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfDataAccess.Configurations
{
    public class ShowImageConfiguration : IEntityTypeConfiguration<ShowImage>
    {
        public void Configure(EntityTypeBuilder<ShowImage> builder)
        {
            builder.Property(si => si.ShowImagePath)
                .IsRequired();

            builder.HasIndex(si => si.ShowImagePath)
                .IsUnique();
        }
    }
}
