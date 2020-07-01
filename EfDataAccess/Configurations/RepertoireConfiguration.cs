﻿using Domain;
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

            builder.Property(r => r.NumberOfSoldTickets)
                .IsRequired();

            builder.HasOne(r => r.Theatre)
                .WithMany(rt => rt.Repertoires)
                .HasForeignKey(r => r.TheatreId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(r => r.Scene)
                .WithMany(rt => rt.Repertoires)
                .HasForeignKey(r => r.SceneId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasMany(p => p.Prices)
                .WithOne(r => r.Repertoire)
                .HasForeignKey(r => r.RepertoireId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
