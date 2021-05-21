using Application.DTO.PurchaseDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO.UserDto
{
    public class GetUserDto
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public int RoleId { get; set; }

        public string RoleName { get; set; }

        public IEnumerable<GetDetailedPurchaseDto> GetDetailedPurchaseDtos { get; set; }

        public int ShowFollowing { get; set; }

        public string Status { get; set; }

        public int? TheatreId { get; set; }

        public string Theatre { get; set; }

        public DateTime CreatedAt { get; set; }
    }

}
