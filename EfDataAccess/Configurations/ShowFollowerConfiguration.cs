using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfDataAccess.Configurations
{
    public class ShowFollowerConfiguration : IEntityTypeConfiguration<ShowFollower>
    {
        public void Configure(EntityTypeBuilder<ShowFollower> builder)
        {
            builder.HasKey(sf => new { sf.ShowId, sf.UserId });
        }
    }
}
