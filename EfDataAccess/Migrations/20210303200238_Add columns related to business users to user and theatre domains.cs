using Microsoft.EntityFrameworkCore.Migrations;

namespace EfDataAccess.Migrations
{
    public partial class Addcolumnsrelatedtobusinessuserstouserandtheatredomains : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "Users",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "TheatreId",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsVisible",
                table: "Theatres",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateIndex(
                name: "IX_Users_TheatreId",
                table: "Users",
                column: "TheatreId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Theatres_TheatreId",
                table: "Users",
                column: "TheatreId",
                principalTable: "Theatres",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Theatres_TheatreId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_TheatreId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "TheatreId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "IsVisible",
                table: "Theatres");
        }
    }
}
