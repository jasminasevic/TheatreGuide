using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfDataAccess.Configurations
{
    public class SectorSoldTicketsConfiguration : IEntityTypeConfiguration<SectorSoldTickets>
    {
        public void Configure(EntityTypeBuilder<SectorSoldTickets> builder)
        {
            builder.HasKey(st => new { st.RepertoireId, st.SectorId });
        }
    }
}
