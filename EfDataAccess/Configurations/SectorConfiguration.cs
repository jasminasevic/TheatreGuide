using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfDataAccess.Configurations
{
    public class SectorConfiguration : IEntityTypeConfiguration<Sector>
    {
        public void Configure(EntityTypeBuilder<Sector> builder)
        {
            builder.Property(s => s.SectorName)
                .IsRequired()
                .HasMaxLength(30);

            builder.Property(s => s.SeatCapacity)
                .IsRequired();

            builder.Property(s => s.RowsTotalNumber)
                .IsRequired();

            builder.HasMany(p => p.Prices)
                .WithOne(s => s.Sector)
                .HasForeignKey(s => s.SectorId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasMany(st => st.SectorSoldTickets)
                .WithOne(s => s.Sector)
                .HasForeignKey(s => s.SectorId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
