using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EfDataAccess.Migrations
{
    public partial class addtheatre_imagessceneentitiesandconfigurations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Scenes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ModifiedAt = table.Column<DateTime>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    SeatCapacity = table.Column<int>(nullable: false),
                    SceneName = table.Column<string>(maxLength: 60, nullable: false),
                    TheatreId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Scenes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Scenes_Theatres_TheatreId",
                        column: x => x.TheatreId,
                        principalTable: "Theatres",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TheatreImages",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ModifiedAt = table.Column<DateTime>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    TheatreImageAlt = table.Column<string>(nullable: true),
                    TheatreImagePath = table.Column<string>(nullable: false),
                    TheatreId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TheatreImages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TheatreImages_Theatres_TheatreId",
                        column: x => x.TheatreId,
                        principalTable: "Theatres",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Scenes_TheatreId_SceneName",
                table: "Scenes",
                columns: new[] { "TheatreId", "SceneName" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_TheatreImages_TheatreId",
                table: "TheatreImages",
                column: "TheatreId");

            migrationBuilder.CreateIndex(
                name: "IX_TheatreImages_TheatreImagePath",
                table: "TheatreImages",
                column: "TheatreImagePath",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Scenes");

            migrationBuilder.DropTable(
                name: "TheatreImages");
        }
    }
}
