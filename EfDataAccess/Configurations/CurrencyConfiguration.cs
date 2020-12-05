using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfDataAccess.Configurations
{
    public class CurrencyConfiguration : IEntityTypeConfiguration<Currency>
    {
        public void Configure(EntityTypeBuilder<Currency> builder)
        {
            builder.Property(c => c.CurrencyName)
                .IsRequired()
                .HasMaxLength(20);

            builder.HasIndex(c => c.CurrencyName)
                .IsUnique();

        }
    }
}
