using System.ComponentModel.DataAnnotations;

namespace VBCourt.Api.Models
{
    public record class Team
    {
        public int Id { get; private init; }
        [MaxLength(100)]
        public string Name { get; set; }
        public int Number { get; init; }

        public Team(string name)
        {
            Name = name;
            Number = Random.Shared.Next(10_000, 99_999);
        }
    }
}
