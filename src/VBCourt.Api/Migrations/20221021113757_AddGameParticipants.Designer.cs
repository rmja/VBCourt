// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using VBCourt.Api;

#nullable disable

namespace VBCourt.Api.Migrations
{
    [DbContext(typeof(CourtContext))]
    [Migration("20221021113757_AddGameParticipants")]
    partial class AddGameParticipants
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("VBCourt.Api.Models.Athlete", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<int>("Phone")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Athletes");
                });

            modelBuilder.Entity("VBCourt.Api.Models.AthleteTeam", b =>
                {
                    b.Property<int>("AthleteId")
                        .HasColumnType("int");

                    b.Property<int>("TeamId")
                        .HasColumnType("int");

                    b.HasKey("AthleteId", "TeamId");

                    b.ToTable("AthleteTeam");
                });

            modelBuilder.Entity("VBCourt.Api.Models.Court", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("Id");

                    b.ToTable("Courts");
                });

            modelBuilder.Entity("VBCourt.Api.Models.Game", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int?>("MaxPlayers")
                        .HasColumnType("int");

                    b.Property<int>("MinPlayers")
                        .HasColumnType("int");

                    b.Property<int>("TeamId")
                        .HasColumnType("int");

                    b.Property<DateTimeOffset>("Time")
                        .HasColumnType("datetimeoffset");

                    b.HasKey("Id");

                    b.ToTable("Games");
                });

            modelBuilder.Entity("VBCourt.Api.Models.Participant", b =>
                {
                    b.Property<int>("GameId")
                        .HasColumnType("int");

                    b.Property<int>("AthleteId")
                        .HasColumnType("int");

                    b.Property<int>("Availability")
                        .HasColumnType("int");

                    b.HasKey("GameId", "AthleteId");

                    b.HasIndex("AthleteId");

                    b.ToTable("Participant");
                });

            modelBuilder.Entity("VBCourt.Api.Models.Team", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<int>("Number")
                        .HasColumnType("int");

                    b.Property<string>("Password")
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.HasKey("Id");

                    b.HasIndex("Number")
                        .IsUnique();

                    b.ToTable("Teams");
                });

            modelBuilder.Entity("VBCourt.Api.Models.AthleteTeam", b =>
                {
                    b.HasOne("VBCourt.Api.Models.Athlete", null)
                        .WithMany("Teams")
                        .HasForeignKey("AthleteId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("VBCourt.Api.Models.Participant", b =>
                {
                    b.HasOne("VBCourt.Api.Models.Athlete", "Athlete")
                        .WithMany()
                        .HasForeignKey("AthleteId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("VBCourt.Api.Models.Game", "Game")
                        .WithMany("Participants")
                        .HasForeignKey("GameId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Athlete");

                    b.Navigation("Game");
                });

            modelBuilder.Entity("VBCourt.Api.Models.Athlete", b =>
                {
                    b.Navigation("Teams");
                });

            modelBuilder.Entity("VBCourt.Api.Models.Game", b =>
                {
                    b.Navigation("Participants");
                });
#pragma warning restore 612, 618
        }
    }
}
