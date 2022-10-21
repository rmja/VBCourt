using System.ComponentModel.DataAnnotations;

namespace VBCourt.Api.Models
{
    public record class Athlete
    {
        public int Id { get; private init; }
        [MaxLength(200)]
        public string Name { get; set; }
        [MaxLength(200)]
        public string Email { get; set; }
        public int Phone { get; set; }
        public ICollection<Membership>? Memberships { get; }

        public Athlete(string name, string email, int phone)
        {
            Name = name;
            Email = email;
            Phone = phone;
        }
    }
}
