using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfDataAccess.Configurations
{
    public class AddressConfiguration : IEntityTypeConfiguration<Address>
    {
        public void Configure(EntityTypeBuilder<Address> builder)
        {
            builder.Property(a => a.Location)
                .IsRequired();

            builder.Property(a => a.Longitude)
                .IsRequired();

            builder.Property(a => a.Latitude)
                .IsRequired();
        }
    }
}
