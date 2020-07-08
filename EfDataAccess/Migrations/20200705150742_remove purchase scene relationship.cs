using Microsoft.EntityFrameworkCore.Migrations;

namespace EfDataAccess.Migrations
{
    public partial class removepurchasescenerelationship : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Purchases_Scenes_SceneId",
                table: "Purchases");

            migrationBuilder.DropIndex(
                name: "IX_Purchases_SceneId",
                table: "Purchases");

            migrationBuilder.DropColumn(
                name: "SceneId",
                table: "Purchases");

            migrationBuilder.AddColumn<string>(
                name: "Entrance",
                table: "Purchases",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Entrance",
                table: "Purchases");

            migrationBuilder.AddColumn<int>(
                name: "SceneId",
                table: "Purchases",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Purchases_SceneId",
                table: "Purchases",
                column: "SceneId");

            migrationBuilder.AddForeignKey(
                name: "FK_Purchases_Scenes_SceneId",
                table: "Purchases",
                column: "SceneId",
                principalTable: "Scenes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
