using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfDataAccess.Configurations
{
    public class WriterConfiguration : IEntityTypeConfiguration<Writer>
    {
        public void Configure(EntityTypeBuilder<Writer> builder)
        {
            builder.Property(w => w.WriterFirstName)
                .IsRequired()
                .HasMaxLength(30);

            builder.Property(w => w.WriterLastName)
                .IsRequired()
                .HasMaxLength(30);

            builder.Property(w => w.WriterBiography)
                .IsRequired();
            
        }
    }
}
