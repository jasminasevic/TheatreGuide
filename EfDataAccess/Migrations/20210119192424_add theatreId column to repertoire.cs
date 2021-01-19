using Microsoft.EntityFrameworkCore.Migrations;

namespace EfDataAccess.Migrations
{
    public partial class addtheatreIdcolumntorepertoire : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TheatreId",
                table: "Repertoires",
                nullable: false,
                defaultValue: 0);

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

        protected override void Down(MigrationBuilder migrationBuilder)
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
    }
}
