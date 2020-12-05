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

            builder.HasKey(price => new { price.RepertoireId, price.SectorId });


            builder.Property(p => p.TicketPrice)
               .IsRequired();


            builder.HasOne(p => p.Currency)
                .WithMany(p => p.Prices)
                .HasForeignKey(p => p.CurrencyId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
