namespace VBCourt.Api.Models
{
    public record class Game
    {
        public int Id { get; private init; }
        public int TeamId { get; init; }
        public DateTimeOffset Time { get; init; }
        public int MinPlayers { get; set; }
        public int? MaxPlayers { get; set; }
        public Team? Team { get; }
        public ICollection<Participant>? Participants { get; set; }
    }
}
