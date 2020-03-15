using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfDataAccess.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            //builder.Property(u => u.CreatedAt)
            //    .HasDefaultValueSql("getdate()");

            builder.Property(u => u.FirstName)
                .IsRequired()
                .HasMaxLength(30);

            builder.Property(u => u.LastName)
                .IsRequired()
                .HasMaxLength(30);

            builder.Property(u => u.Email)
                .IsRequired()
                .HasMaxLength(40);

            builder.HasIndex(u => u.Email)
                .IsUnique();

            builder.Property(u => u.Password)
                .IsRequired()
                .HasMaxLength(40);

            builder.Property(u => u.Address)
                .HasMaxLength(100);


            builder.HasMany(u => u.ShowFollowers)
                .WithOne(sf => sf.User)
                .HasForeignKey(sf => sf.UserId)
                .OnDelete(DeleteBehavior.Restrict);

        }
    }
}
