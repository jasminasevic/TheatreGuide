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
        }
    }
}
