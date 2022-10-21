using Microsoft.EntityFrameworkCore;
using VBCourt.Api.Models;

namespace VBCourt.Api
{
    public class CourtContext : DbContext
    {
        public DbSet<Athlete> Athletes { get; set; } = default!;
        public DbSet<Court> Courts { get; set; } = default!;
        public DbSet<Game> Games { get; set; } = default!;
        public DbSet<Team> Teams { get; set; } = default!;

        public CourtContext(DbContextOptions<CourtContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Team>().HasIndex(x => x.Number).IsUnique();
        }
    }
}
