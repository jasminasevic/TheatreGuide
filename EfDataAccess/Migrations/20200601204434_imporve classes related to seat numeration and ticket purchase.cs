using Microsoft.EntityFrameworkCore.Migrations;

namespace EfDataAccess.Migrations
{
    public partial class imporveclassesrelatedtoseatnumerationandticketpurchase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "SubsceneCategoryId",
                table: "Prices",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Prices_SubsceneCategoryId",
                table: "Prices",
                column: "SubsceneCategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Prices_SubsceneCategories_SubsceneCategoryId",
                table: "Prices",
                column: "SubsceneCategoryId",
                principalTable: "SubsceneCategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Prices_SubsceneCategories_SubsceneCategoryId",
                table: "Prices");

            migrationBuilder.DropIndex(
                name: "IX_Prices_SubsceneCategoryId",
                table: "Prices");

            migrationBuilder.DropColumn(
                name: "SubsceneCategoryId",
                table: "Prices");
        }
    }
}
