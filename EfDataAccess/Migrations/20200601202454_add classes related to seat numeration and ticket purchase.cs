using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EfDataAccess.Migrations
{
    public partial class addclassesrelatedtoseatnumerationandticketpurchase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Repertoires_Scenes_SceneId",
                table: "Repertoires");

            migrationBuilder.DropForeignKey(
                name: "FK_Theatres_Cities_CityId",
                table: "Theatres");

            migrationBuilder.DropForeignKey(
                name: "FK_Users_Cities_CityId",
                table: "Users");

            migrationBuilder.DropTable(
                name: "Cities");

            migrationBuilder.DropIndex(
                name: "IX_Users_CityId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Theatres_CityId",
                table: "Theatres");

            migrationBuilder.DropColumn(
                name: "Address",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "CityId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Address",
                table: "Theatres");

            migrationBuilder.DropColumn(
                name: "CityId",
                table: "Theatres");

            migrationBuilder.DropColumn(
                name: "SeatCapacity",
                table: "Scenes");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "Repertoires");

            migrationBuilder.AddColumn<int>(
                name: "AddressId",
                table: "Theatres",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "StartTime",
                table: "Repertoires",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "TheatreId",
                table: "Repertoires",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "EntranceId",
                table: "Purchases",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "RowNumber",
                table: "Purchases",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SceneId",
                table: "Purchases",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SubsceneId",
                table: "Purchases",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Addresses",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    ModifiedAt = table.Column<DateTime>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    Location = table.Column<string>(nullable: false),
                    Longitude = table.Column<decimal>(nullable: false),
                    Latitude = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Addresses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Entrances",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    ModifiedAt = table.Column<DateTime>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    EntranceName = table.Column<string>(maxLength: 20, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Entrances", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SubsceneCategories",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    ModifiedAt = table.Column<DateTime>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    SubsceneCategoryName = table.Column<string>(maxLength: 20, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SubsceneCategories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Subscenes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    ModifiedAt = table.Column<DateTime>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    SceneId = table.Column<int>(nullable: false),
                    SeatCapacity = table.Column<int>(nullable: false),
                    RowsTotalNumber = table.Column<int>(nullable: false),
                    SubsceneCategoryId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Subscenes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Subscenes_Scenes_SceneId",
                        column: x => x.SceneId,
                        principalTable: "Scenes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Subscenes_SubsceneCategories_SubsceneCategoryId",
                        column: x => x.SubsceneCategoryId,
                        principalTable: "SubsceneCategories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Prices",
                columns: table => new
                {
                    RepertoireId = table.Column<int>(nullable: false),
                    SubsceneId = table.Column<int>(nullable: false),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    ModifiedAt = table.Column<DateTime>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    TicketPrice = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Prices", x => new { x.RepertoireId, x.SubsceneId });
                    table.ForeignKey(
                        name: "FK_Prices_Repertoires_RepertoireId",
                        column: x => x.RepertoireId,
                        principalTable: "Repertoires",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Prices_Subscenes_SubsceneId",
                        column: x => x.SubsceneId,
                        principalTable: "Subscenes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Theatres_AddressId",
                table: "Theatres",
                column: "AddressId");

            migrationBuilder.CreateIndex(
                name: "IX_Repertoires_TheatreId",
                table: "Repertoires",
                column: "TheatreId");

            migrationBuilder.CreateIndex(
                name: "IX_Purchases_EntranceId",
                table: "Purchases",
                column: "EntranceId");

            migrationBuilder.CreateIndex(
                name: "IX_Purchases_SceneId",
                table: "Purchases",
                column: "SceneId");

            migrationBuilder.CreateIndex(
                name: "IX_Purchases_SubsceneId",
                table: "Purchases",
                column: "SubsceneId");

            migrationBuilder.CreateIndex(
                name: "IX_Prices_SubsceneId",
                table: "Prices",
                column: "SubsceneId");

            migrationBuilder.CreateIndex(
                name: "IX_Subscenes_SceneId",
                table: "Subscenes",
                column: "SceneId");

            migrationBuilder.CreateIndex(
                name: "IX_Subscenes_SubsceneCategoryId",
                table: "Subscenes",
                column: "SubsceneCategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Purchases_Entrances_EntranceId",
                table: "Purchases",
                column: "EntranceId",
                principalTable: "Entrances",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Purchases_Scenes_SceneId",
                table: "Purchases",
                column: "SceneId",
                principalTable: "Scenes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Purchases_Subscenes_SubsceneId",
                table: "Purchases",
                column: "SubsceneId",
                principalTable: "Subscenes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Repertoires_Scenes_SceneId",
                table: "Repertoires",
                column: "SceneId",
                principalTable: "Scenes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Repertoires_Theatres_TheatreId",
                table: "Repertoires",
                column: "TheatreId",
                principalTable: "Theatres",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Theatres_Addresses_AddressId",
                table: "Theatres",
                column: "AddressId",
                principalTable: "Addresses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Purchases_Entrances_EntranceId",
                table: "Purchases");

            migrationBuilder.DropForeignKey(
                name: "FK_Purchases_Scenes_SceneId",
                table: "Purchases");

            migrationBuilder.DropForeignKey(
                name: "FK_Purchases_Subscenes_SubsceneId",
                table: "Purchases");

            migrationBuilder.DropForeignKey(
                name: "FK_Repertoires_Scenes_SceneId",
                table: "Repertoires");

            migrationBuilder.DropForeignKey(
                name: "FK_Repertoires_Theatres_TheatreId",
                table: "Repertoires");

            migrationBuilder.DropForeignKey(
                name: "FK_Theatres_Addresses_AddressId",
                table: "Theatres");

            migrationBuilder.DropTable(
                name: "Addresses");

            migrationBuilder.DropTable(
                name: "Entrances");

            migrationBuilder.DropTable(
                name: "Prices");

            migrationBuilder.DropTable(
                name: "Subscenes");

            migrationBuilder.DropTable(
                name: "SubsceneCategories");

            migrationBuilder.DropIndex(
                name: "IX_Theatres_AddressId",
                table: "Theatres");

            migrationBuilder.DropIndex(
                name: "IX_Repertoires_TheatreId",
                table: "Repertoires");

            migrationBuilder.DropIndex(
                name: "IX_Purchases_EntranceId",
                table: "Purchases");

            migrationBuilder.DropIndex(
                name: "IX_Purchases_SceneId",
                table: "Purchases");

            migrationBuilder.DropIndex(
                name: "IX_Purchases_SubsceneId",
                table: "Purchases");

            migrationBuilder.DropColumn(
                name: "AddressId",
                table: "Theatres");

            migrationBuilder.DropColumn(
                name: "TheatreId",
                table: "Repertoires");

            migrationBuilder.DropColumn(
                name: "EntranceId",
                table: "Purchases");

            migrationBuilder.DropColumn(
                name: "RowNumber",
                table: "Purchases");

            migrationBuilder.DropColumn(
                name: "SceneId",
                table: "Purchases");

            migrationBuilder.DropColumn(
                name: "SubsceneId",
                table: "Purchases");

            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "Users",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CityId",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "Theatres",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "CityId",
                table: "Theatres",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SeatCapacity",
                table: "Scenes",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "StartTime",
                table: "Repertoires",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string));

            migrationBuilder.AddColumn<double>(
                name: "Price",
                table: "Repertoires",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.CreateTable(
                name: "Cities",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CityName = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    ModifiedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cities", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Users_CityId",
                table: "Users",
                column: "CityId");

            migrationBuilder.CreateIndex(
                name: "IX_Theatres_CityId",
                table: "Theatres",
                column: "CityId");

            migrationBuilder.CreateIndex(
                name: "IX_Cities_CityName",
                table: "Cities",
                column: "CityName",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Repertoires_Scenes_SceneId",
                table: "Repertoires",
                column: "SceneId",
                principalTable: "Scenes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Theatres_Cities_CityId",
                table: "Theatres",
                column: "CityId",
                principalTable: "Cities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Cities_CityId",
                table: "Users",
                column: "CityId",
                principalTable: "Cities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
