using Microsoft.EntityFrameworkCore.Migrations;

namespace EfDataAccess.Migrations
{
    public partial class MovetheatreIdcolumnfromrepertoireentity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Repertoires_Theatres_TheatreId",
                table: "Repertoires");

            migrationBuilder.DropIndex(
                name: "IX_Repertoires_TheatreId",
                table: "Repertoires");

            migrationBuilder.DropColumn(
                name: "TheatreId",
                table: "Repertoires");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TheatreId",
                table: "Repertoires",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Repertoires_TheatreId",
                table: "Repertoires",
                column: "TheatreId");

            migrationBuilder.AddForeignKey(
                name: "FK_Repertoires_Theatres_TheatreId",
                table: "Repertoires",
                column: "TheatreId",
                principalTable: "Theatres",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
