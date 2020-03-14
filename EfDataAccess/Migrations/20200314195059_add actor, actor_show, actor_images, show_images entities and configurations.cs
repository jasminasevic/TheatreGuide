using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EfDataAccess.Migrations
{
    public partial class addactoractor_showactor_imagesshow_imagesentitiesandconfigurations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Actors",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ModifiedAt = table.Column<DateTime>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    ActorFirstName = table.Column<string>(maxLength: 30, nullable: false),
                    ActorLastName = table.Column<string>(nullable: true),
                    ActorBiography = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Actors", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ShowImages",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ModifiedAt = table.Column<DateTime>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    ShowImagePath = table.Column<string>(nullable: false),
                    ShowImageAlt = table.Column<string>(nullable: true),
                    ShowId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShowImages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ShowImages_Shows_ShowId",
                        column: x => x.ShowId,
                        principalTable: "Shows",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ActorImages",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ModifiedAt = table.Column<DateTime>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    ActorImageAlt = table.Column<string>(nullable: true),
                    ActorImagePath = table.Column<string>(nullable: false),
                    ActorId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ActorImages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ActorImages_Actors_ActorId",
                        column: x => x.ActorId,
                        principalTable: "Actors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ActorShows",
                columns: table => new
                {
                    ActorId = table.Column<int>(nullable: false),
                    ShowId = table.Column<int>(nullable: false),
                    ModifiedAt = table.Column<DateTime>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    ActorRoleName = table.Column<string>(maxLength: 50, nullable: false),
                    ActorRoleDescription = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ActorShows", x => new { x.ActorId, x.ShowId });
                    table.ForeignKey(
                        name: "FK_ActorShows_Actors_ActorId",
                        column: x => x.ActorId,
                        principalTable: "Actors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ActorShows_Shows_ShowId",
                        column: x => x.ShowId,
                        principalTable: "Shows",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ActorImages_ActorId",
                table: "ActorImages",
                column: "ActorId");

            migrationBuilder.CreateIndex(
                name: "IX_ActorImages_ActorImagePath",
                table: "ActorImages",
                column: "ActorImagePath",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ActorShows_ShowId",
                table: "ActorShows",
                column: "ShowId");

            migrationBuilder.CreateIndex(
                name: "IX_ShowImages_ShowId",
                table: "ShowImages",
                column: "ShowId");

            migrationBuilder.CreateIndex(
                name: "IX_ShowImages_ShowImagePath",
                table: "ShowImages",
                column: "ShowImagePath",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ActorImages");

            migrationBuilder.DropTable(
                name: "ActorShows");

            migrationBuilder.DropTable(
                name: "ShowImages");

            migrationBuilder.DropTable(
                name: "Actors");
        }
    }
}
