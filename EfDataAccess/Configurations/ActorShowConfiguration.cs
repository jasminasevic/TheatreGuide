using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfDataAccess.Configurations
{
    public class ActorShowConfiguration : IEntityTypeConfiguration<ActorShow>
    {
        public void Configure(EntityTypeBuilder<ActorShow> builder)
        {
            builder.HasKey(actorshow => new { actorshow.ActorId, actorshow.ShowId });

            builder.Property(actorshow => actorshow.ActorRoleName)
                .IsRequired()
                .HasMaxLength(50);
        }
    }
}
