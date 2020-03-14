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

            builder.Property(t => t.TheatreDescription)
                .IsRequired();

            builder.Property(t => t.Address)
                .IsRequired();

            builder.Property(t => t.WorkingHours)
                .IsRequired();

            builder.Property(t => t.ContactEmail)
                .IsRequired()
                .HasMaxLength(40);

        }
    }
}
