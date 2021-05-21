using EfDataAccess;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Api.Core
{
    public class JwtManager
    {
        private readonly EfContext _context;

        public JwtManager(EfContext context)
        {
            _context = context;
        }

        public string MakeToken(string username, string passwordText)
        {
            var user = _context.Users
                .Include(r => r.Role)
                .FirstOrDefault(x => x.Email == username
                && x.Status == Domain.User.StatusType.Approved);

            if (user == null || user.PasswordKey == null)
                return null;

            if (!MatchPasswordHash(passwordText, user.Password, user.PasswordKey))
                return null;


            var performer = new JwtPerformer
            {
                Id = user.Id,
                Role = (Application.Interfaces.Role)user.RoleId,
                Identity = user.Email,
                FirstName = user.FirstName,
                TheatreId = user.TheatreId
            };

            // var performer = new FakeAdminPerformer();

            var issuer = "asp_api";
            var secretKey = "ThisIsMyVerySecretKey";
            var claims = new List<Claim> 
            {
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString(), ClaimValueTypes.String, issuer),
                new Claim(JwtRegisteredClaimNames.Iss, "asp_api", ClaimValueTypes.String, issuer),
                new Claim(JwtRegisteredClaimNames.Iat, DateTimeOffset.UtcNow.ToUnixTimeSeconds().ToString(), ClaimValueTypes.Integer64, issuer),
                new Claim("UserId", performer.Id.ToString(), ClaimValueTypes.String, issuer),
                new Claim("PerformerData", JsonConvert.SerializeObject(performer), ClaimValueTypes.String, issuer),
                new Claim("RoleId", user.RoleId.ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));

            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var now = DateTime.UtcNow;
            var token = new JwtSecurityToken(
                issuer: issuer,
                audience: "Any",
                claims: claims,
                notBefore: now,
                expires: now.AddMinutes(60),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private bool MatchPasswordHash(string passwordText, byte[] password, byte[] passwordKey)
        {
            using (var hmac = new HMACSHA512(passwordKey))
            {
                var passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(passwordText));

                for(int i = 0; i < passwordHash.Length; i++)
                {
                    if(passwordHash[i] != password[i])
                    {
                        return false;
                    }
                }
                return true;
            }
        }
    }
}
