using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfDataAccess.Configurations
{
    public class EntranceConfiguration : IEntityTypeConfiguration<Entrance>
    {
        public void Configure(EntityTypeBuilder<Entrance> builder)
        {
            builder.Property(e => e.EntranceName)
                .IsRequired()
                .HasMaxLength(20);

        }
    }
}
