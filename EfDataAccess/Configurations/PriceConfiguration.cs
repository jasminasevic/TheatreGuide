using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfDataAccess.Configurations
{
    public class PriceConfiguration : IEntityTypeConfiguration<Price>
    {
        public void Configure(EntityTypeBuilder<Price> builder)
        {
            builder.HasKey(p => new { p.RepertoireId, p.SubsceneId });

            builder.HasOne(p => p.Subscene)
                .WithMany(ss => ss.Prices)
                .HasForeignKey(ss => ss.SubsceneId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Property(p => p.TicketPrice)
               .IsRequired();

        }
    }
}
