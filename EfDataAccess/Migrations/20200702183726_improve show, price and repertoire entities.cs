using Microsoft.EntityFrameworkCore.Migrations;

namespace EfDataAccess.Migrations
{
    public partial class improveshowpriceandrepertoireentities : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Prices_Repertoires_RepertoireId",
                table: "Prices");

            migrationBuilder.DropForeignKey(
                name: "FK_Repertoires_Scenes_SceneId",
                table: "Repertoires");

            migrationBuilder.DropIndex(
                name: "IX_Repertoires_SceneId",
                table: "Repertoires");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Prices",
                table: "Prices");

            migrationBuilder.DropColumn(
                name: "SceneId",
                table: "Repertoires");

            migrationBuilder.DropColumn(
                name: "RepertoireId",
                table: "Prices");

            migrationBuilder.AddColumn<int>(
                name: "SceneId",
                table: "Shows",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ShowId",
                table: "Prices",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Prices",
                table: "Prices",
                columns: new[] { "ShowId", "SectorId" });

            migrationBuilder.CreateIndex(
                name: "IX_Shows_SceneId",
                table: "Shows",
                column: "SceneId");

            migrationBuilder.AddForeignKey(
                name: "FK_Prices_Shows_ShowId",
                table: "Prices",
                column: "ShowId",
                principalTable: "Shows",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Shows_Scenes_SceneId",
                table: "Shows",
                column: "SceneId",
                principalTable: "Scenes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Prices_Shows_ShowId",
                table: "Prices");

            migrationBuilder.DropForeignKey(
                name: "FK_Shows_Scenes_SceneId",
                table: "Shows");

            migrationBuilder.DropIndex(
                name: "IX_Shows_SceneId",
                table: "Shows");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Prices",
                table: "Prices");

            migrationBuilder.DropColumn(
                name: "SceneId",
                table: "Shows");

            migrationBuilder.DropColumn(
                name: "ShowId",
                table: "Prices");

            migrationBuilder.AddColumn<int>(
                name: "SceneId",
                table: "Repertoires",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "RepertoireId",
                table: "Prices",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Prices",
                table: "Prices",
                columns: new[] { "RepertoireId", "SectorId" });

            migrationBuilder.CreateIndex(
                name: "IX_Repertoires_SceneId",
                table: "Repertoires",
                column: "SceneId");

            migrationBuilder.AddForeignKey(
                name: "FK_Prices_Repertoires_RepertoireId",
                table: "Prices",
                column: "RepertoireId",
                principalTable: "Repertoires",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Repertoires_Scenes_SceneId",
                table: "Repertoires",
                column: "SceneId",
                principalTable: "Scenes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
