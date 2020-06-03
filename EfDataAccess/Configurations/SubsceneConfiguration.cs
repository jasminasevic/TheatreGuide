using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfDataAccess.Configurations
{
    public class SubsceneConfiguration : IEntityTypeConfiguration<Subscene>
    {
        public void Configure(EntityTypeBuilder<Subscene> builder)
        {
            builder.Property(s => s.SeatCapacity)
                .IsRequired();

            builder.Property(s => s.RowsTotalNumber)
                .IsRequired();

            builder.HasMany(s => s.Prices)
                .WithOne(p => p.Subscene)
                .HasForeignKey(p => p.SubsceneId)
                .OnDelete(DeleteBehavior.Restrict);

        }
    }
}
