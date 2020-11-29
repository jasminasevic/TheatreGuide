using Microsoft.EntityFrameworkCore.Migrations;

namespace EfDataAccess.Migrations
{
    public partial class Movepriceconfigurationfromshowtorepertoire : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Prices_Shows_ShowId",
                table: "Prices");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Prices",
                table: "Prices");

            migrationBuilder.DropColumn(
                name: "ShowId",
                table: "Prices");

            migrationBuilder.AddColumn<int>(
                name: "RepertoireId",
                table: "Prices",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Prices",
                table: "Prices",
                columns: new[] { "RepertoireId", "SectorId" });

            migrationBuilder.AddForeignKey(
                name: "FK_Prices_Repertoires_RepertoireId",
                table: "Prices",
                column: "RepertoireId",
                principalTable: "Repertoires",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Prices_Repertoires_RepertoireId",
                table: "Prices");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Prices",
                table: "Prices");

            migrationBuilder.DropColumn(
                name: "RepertoireId",
                table: "Prices");

            migrationBuilder.AddColumn<int>(
                name: "ShowId",
                table: "Prices",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Prices",
                table: "Prices",
                columns: new[] { "ShowId", "SectorId" });

            migrationBuilder.AddForeignKey(
                name: "FK_Prices_Shows_ShowId",
                table: "Prices",
                column: "ShowId",
                principalTable: "Shows",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
