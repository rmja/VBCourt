namespace VBCourt.Api.Models
{
    public record class Membership(int Id, int AthleteId, int TeamId)
    {
        public Athlete? Athlete { get; }
        public Team? Team { get; }
    }
}
