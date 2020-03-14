using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfDataAccess.Configurations
{
    public class SceneConfiguration : IEntityTypeConfiguration<Scene>
    {
        public void Configure(EntityTypeBuilder<Scene> builder)
        {
            builder.Property(s => s.SceneName)
                .IsRequired()
                .HasMaxLength(60);

            builder.HasIndex(s => new { s.TheatreId, s.SceneName })
                .IsUnique();

            builder.Property(s => s.SeatCapacity)
                .IsRequired();

        }
    }
}
