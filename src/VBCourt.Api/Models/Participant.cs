namespace VBCourt.Api.Models
{
    public record class Participant(int Id, int GameId, int AthleteId)
    {
        public Game? Game { get; init; }
        public Athlete? Athlete { get; init; }
        public Availability Availability { get; set; }
    }

    public enum Availability
    {
        Yes,
        IfNeedBe,
        CannotAttend,
        Pending,
    }
}
