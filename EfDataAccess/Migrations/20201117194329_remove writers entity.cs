using Microsoft.EntityFrameworkCore.Migrations;

namespace EfDataAccess.Migrations
{
    public partial class removewritersentity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Shows_Writers_WriterId",
                table: "Shows");

            migrationBuilder.DropIndex(
                name: "IX_Shows_WriterId",
                table: "Shows");

            migrationBuilder.DropColumn(
                name: "WriterId",
                table: "Shows");

            migrationBuilder.AddColumn<string>(
                name: "Writer",
                table: "Shows",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Writer",
                table: "Shows");

            migrationBuilder.AddColumn<int>(
                name: "WriterId",
                table: "Shows",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Shows_WriterId",
                table: "Shows",
                column: "WriterId");

            migrationBuilder.AddForeignKey(
                name: "FK_Shows_Writers_WriterId",
                table: "Shows",
                column: "WriterId",
                principalTable: "Writers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
