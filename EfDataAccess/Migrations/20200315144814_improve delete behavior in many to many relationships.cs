using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EfDataAccess.Migrations
{
    public partial class improvedeletebehaviorinmanytomanyrelationships : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ActorShows_Actors_ActorId",
                table: "ActorShows");

            migrationBuilder.DropForeignKey(
                name: "FK_ActorShows_Shows_ShowId",
                table: "ActorShows");

            migrationBuilder.CreateTable(
                name: "ShowFollowers",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false),
                    ShowId = table.Column<int>(nullable: false),
                    ModifiedAt = table.Column<DateTime>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShowFollowers", x => new { x.ShowId, x.UserId });
                    table.ForeignKey(
                        name: "FK_ShowFollowers_Shows_ShowId",
                        column: x => x.ShowId,
                        principalTable: "Shows",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ShowFollowers_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ShowFollowers_UserId",
                table: "ShowFollowers",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_ActorShows_Actors_ActorId",
                table: "ActorShows",
                column: "ActorId",
                principalTable: "Actors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ActorShows_Shows_ShowId",
                table: "ActorShows",
                column: "ShowId",
                principalTable: "Shows",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ActorShows_Actors_ActorId",
                table: "ActorShows");

            migrationBuilder.DropForeignKey(
                name: "FK_ActorShows_Shows_ShowId",
                table: "ActorShows");

            migrationBuilder.DropTable(
                name: "ShowFollowers");

            migrationBuilder.AddForeignKey(
                name: "FK_ActorShows_Actors_ActorId",
                table: "ActorShows",
                column: "ActorId",
                principalTable: "Actors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ActorShows_Shows_ShowId",
                table: "ActorShows",
                column: "ShowId",
                principalTable: "Shows",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
