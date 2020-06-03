using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfDataAccess.Configurations
{
    public class SubsceneCategoryConfiguration : IEntityTypeConfiguration<SubsceneCategory>
    {
        public void Configure(EntityTypeBuilder<SubsceneCategory> builder)
        {
            builder.Property(s => s.SubsceneCategoryName)
                .IsRequired()
                .HasMaxLength(20);
        }
    }
}
