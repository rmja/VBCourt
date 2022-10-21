using System.ComponentModel.DataAnnotations;

namespace VBCourt.Api.Models
{
    public record class Court
    {
        public int Id { get; private init; }
        [MaxLength(100)]
        public string Name { get; set; }

        public Court(string name)
        {
            Name = name;
        }
    }
}
