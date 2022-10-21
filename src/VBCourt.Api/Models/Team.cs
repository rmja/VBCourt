using System.ComponentModel.DataAnnotations;

namespace VBCourt.Api.Models
{
    public record class Team
    {
        public int Id { get; private init; }
        [MaxLength(100)]
        public string Name { get; set; }
        public int Number { get; init; }
        [MaxLength(20)]
        public string? Password { get; set; }
        public bool PasswordRequired => Password is not null;

        public Team(string name)
        {
            Name = name;
            Number = Random.Shared.Next(10_000, 99_999);
        }
    }
}
