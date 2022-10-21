using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VBCourt.Api.Migrations
{
    public partial class AddMemberships : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AthleteTeam");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Participant",
                table: "Participant");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "Participant",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Participant",
                table: "Participant",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "Membership",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AthleteId = table.Column<int>(type: "int", nullable: false),
                    TeamId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Membership", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Membership_Athletes_AthleteId",
                        column: x => x.AthleteId,
                        principalTable: "Athletes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Membership_Teams_TeamId",
                        column: x => x.TeamId,
                        principalTable: "Teams",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Participant_GameId",
                table: "Participant",
                column: "GameId");

            migrationBuilder.CreateIndex(
                name: "IX_Membership_AthleteId",
                table: "Membership",
                column: "AthleteId");

            migrationBuilder.CreateIndex(
                name: "IX_Membership_TeamId",
                table: "Membership",
                column: "TeamId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Membership");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Participant",
                table: "Participant");

            migrationBuilder.DropIndex(
                name: "IX_Participant_GameId",
                table: "Participant");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Participant");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Participant",
                table: "Participant",
                columns: new[] { "GameId", "AthleteId" });

            migrationBuilder.CreateTable(
                name: "AthleteTeam",
                columns: table => new
                {
                    AthleteId = table.Column<int>(type: "int", nullable: false),
                    TeamId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AthleteTeam", x => new { x.AthleteId, x.TeamId });
                    table.ForeignKey(
                        name: "FK_AthleteTeam_Athletes_AthleteId",
                        column: x => x.AthleteId,
                        principalTable: "Athletes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });
        }
    }
}
