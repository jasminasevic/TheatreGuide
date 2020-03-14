using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfDataAccess.Configurations
{
    public class DirectorConfiguration : IEntityTypeConfiguration<Director>
    {
        public void Configure(EntityTypeBuilder<Director> builder)
        {
            builder.Property(d => d.DirectorFirstName)
                .IsRequired()
                .HasMaxLength(30);

            builder.Property(d => d.DirectorLastName)
                .IsRequired()
                .HasMaxLength(30);

            builder.Property(d => d.DirectorBiography)
                .IsRequired();
        }
    }
}
