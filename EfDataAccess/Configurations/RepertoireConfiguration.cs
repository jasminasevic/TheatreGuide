using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfDataAccess.Configurations
{
    public class RepertoireConfiguration : IEntityTypeConfiguration<Repertoire>
    {
        public void Configure(EntityTypeBuilder<Repertoire> builder)
        {
            builder.HasOne(r => r.Show)
                .WithMany(rs => rs.Repertoires)
                .HasForeignKey(r => r.ShowId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Property(r => r.Date)
                .IsRequired();

            builder.HasMany(p => p.Prices)
                .WithOne(r => r.Repertoire)
                .HasForeignKey(r => r.RepertoireId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasMany(st => st.SectorSoldTickets)
                .WithOne(st => st.Repertoire)
                .HasForeignKey(st => st.RepertoireId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
