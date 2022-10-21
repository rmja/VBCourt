namespace VBCourt.Api.Models
{
    public record class AthleteTeam(int AthleteId, int TeamId)
    {
        public Athlete? Athlete { get; }
        public Team? Team { get; }
    }
}
