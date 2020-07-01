using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfDataAccess.Configurations
{
    public class PurchaseConfiguration : IEntityTypeConfiguration<Purchase>
    {
        public void Configure(EntityTypeBuilder<Purchase> builder)
        {
            builder.HasOne(p => p.User)
                .WithMany(pu => pu.Purchases)
                .HasForeignKey(p => p.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Property(p => p.SeatNumber)
                .IsRequired();

            builder.Property(p => p.RowNumber)
                .IsRequired();

            builder.HasOne(p => p.Scene)
                .WithMany(pu => pu.Purchases)
                .HasForeignKey(p => p.SceneId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(p => p.Sector)
                .WithMany(pu => pu.Purchases)
                .HasForeignKey(p => p.SectorId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
