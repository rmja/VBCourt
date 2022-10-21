using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VBCourt.Api.Migrations
{
    public partial class AddGameParticipants : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "Teams",
                type: "nvarchar(20)",
                maxLength: 20,
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Participant",
                columns: table => new
                {
                    GameId = table.Column<int>(type: "int", nullable: false),
                    AthleteId = table.Column<int>(type: "int", nullable: false),
                    Availability = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Participant", x => new { x.GameId, x.AthleteId });
                    table.ForeignKey(
                        name: "FK_Participant_Athletes_AthleteId",
                        column: x => x.AthleteId,
                        principalTable: "Athletes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Participant_Games_GameId",
                        column: x => x.GameId,
                        principalTable: "Games",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Teams_Number",
                table: "Teams",
                column: "Number",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Participant_AthleteId",
                table: "Participant",
                column: "AthleteId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Participant");

            migrationBuilder.DropIndex(
                name: "IX_Teams_Number",
                table: "Teams");

            migrationBuilder.DropColumn(
                name: "Password",
                table: "Teams");
        }
    }
}
