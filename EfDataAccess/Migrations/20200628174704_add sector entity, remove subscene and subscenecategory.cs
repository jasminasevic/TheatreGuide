using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EfDataAccess.Migrations
{
    public partial class addsectorentityremovesubsceneandsubscenecategory : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Prices_Repertoires_RepertoireId",
                table: "Prices");

            migrationBuilder.DropForeignKey(
                name: "FK_Prices_SubsceneCategories_SubsceneCategoryId",
                table: "Prices");

            migrationBuilder.DropForeignKey(
                name: "FK_Prices_Subscenes_SubsceneId",
                table: "Prices");

            migrationBuilder.DropForeignKey(
                name: "FK_Purchases_Entrances_EntranceId",
                table: "Purchases");

            migrationBuilder.DropForeignKey(
                name: "FK_Purchases_Subscenes_SubsceneId",
                table: "Purchases");

            migrationBuilder.DropTable(
                name: "Entrances");

            migrationBuilder.DropTable(
                name: "Subscenes");

            migrationBuilder.DropTable(
                name: "SubsceneCategories");

            migrationBuilder.DropIndex(
                name: "IX_Purchases_EntranceId",
                table: "Purchases");

            migrationBuilder.DropIndex(
                name: "IX_Purchases_SubsceneId",
                table: "Purchases");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Prices",
                table: "Prices");

            migrationBuilder.DropIndex(
                name: "IX_Prices_SubsceneCategoryId",
                table: "Prices");

            migrationBuilder.DropIndex(
                name: "IX_Prices_SubsceneId",
                table: "Prices");

            migrationBuilder.DropColumn(
                name: "StartTime",
                table: "Repertoires");

            migrationBuilder.DropColumn(
                name: "EntranceId",
                table: "Purchases");

            migrationBuilder.DropColumn(
                name: "SubsceneId",
                table: "Purchases");

            migrationBuilder.DropColumn(
                name: "SubsceneId",
                table: "Prices");

            migrationBuilder.DropColumn(
                name: "SubsceneCategoryId",
                table: "Prices");

            migrationBuilder.AddColumn<int>(
                name: "SectorId",
                table: "Purchases",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SectorId",
                table: "Prices",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Prices",
                table: "Prices",
                columns: new[] { "RepertoireId", "SectorId" });

            migrationBuilder.CreateTable(
                name: "Sectors",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    ModifiedAt = table.Column<DateTime>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    SectorName = table.Column<string>(maxLength: 30, nullable: false),
                    SceneId = table.Column<int>(nullable: false),
                    SeatCapacity = table.Column<int>(nullable: false),
                    RowsTotalNumber = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sectors", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Sectors_Scenes_SceneId",
                        column: x => x.SceneId,
                        principalTable: "Scenes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Purchases_SectorId",
                table: "Purchases",
                column: "SectorId");

            migrationBuilder.CreateIndex(
                name: "IX_Prices_SectorId",
                table: "Prices",
                column: "SectorId");

            migrationBuilder.CreateIndex(
                name: "IX_Sectors_SceneId",
                table: "Sectors",
                column: "SceneId");

            migrationBuilder.AddForeignKey(
                name: "FK_Prices_Repertoires_RepertoireId",
                table: "Prices",
                column: "RepertoireId",
                principalTable: "Repertoires",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Prices_Sectors_SectorId",
                table: "Prices",
                column: "SectorId",
                principalTable: "Sectors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Purchases_Sectors_SectorId",
                table: "Purchases",
                column: "SectorId",
                principalTable: "Sectors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Prices_Repertoires_RepertoireId",
                table: "Prices");

            migrationBuilder.DropForeignKey(
                name: "FK_Prices_Sectors_SectorId",
                table: "Prices");

            migrationBuilder.DropForeignKey(
                name: "FK_Purchases_Sectors_SectorId",
                table: "Purchases");

            migrationBuilder.DropTable(
                name: "Sectors");

            migrationBuilder.DropIndex(
                name: "IX_Purchases_SectorId",
                table: "Purchases");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Prices",
                table: "Prices");

            migrationBuilder.DropIndex(
                name: "IX_Prices_SectorId",
                table: "Prices");

            migrationBuilder.DropColumn(
                name: "SectorId",
                table: "Purchases");

            migrationBuilder.DropColumn(
                name: "SectorId",
                table: "Prices");

            migrationBuilder.AddColumn<string>(
                name: "StartTime",
                table: "Repertoires",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "EntranceId",
                table: "Purchases",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SubsceneId",
                table: "Purchases",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SubsceneId",
                table: "Prices",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SubsceneCategoryId",
                table: "Prices",
                type: "int",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Prices",
                table: "Prices",
                columns: new[] { "RepertoireId", "SubsceneId" });

            migrationBuilder.CreateTable(
                name: "Entrances",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EntranceName = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    ModifiedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Entrances", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SubsceneCategories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    ModifiedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    SubsceneCategoryName = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SubsceneCategories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Subscenes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    ModifiedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    RowsTotalNumber = table.Column<int>(type: "int", nullable: false),
                    SceneId = table.Column<int>(type: "int", nullable: false),
                    SeatCapacity = table.Column<int>(type: "int", nullable: false),
                    SubsceneCategoryId = table.Column<int>(type: "int", nullable: false)
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

            migrationBuilder.CreateIndex(
                name: "IX_Purchases_EntranceId",
                table: "Purchases",
                column: "EntranceId");

            migrationBuilder.CreateIndex(
                name: "IX_Purchases_SubsceneId",
                table: "Purchases",
                column: "SubsceneId");

            migrationBuilder.CreateIndex(
                name: "IX_Prices_SubsceneCategoryId",
                table: "Prices",
                column: "SubsceneCategoryId");

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
                name: "FK_Prices_Repertoires_RepertoireId",
                table: "Prices",
                column: "RepertoireId",
                principalTable: "Repertoires",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Prices_SubsceneCategories_SubsceneCategoryId",
                table: "Prices",
                column: "SubsceneCategoryId",
                principalTable: "SubsceneCategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Prices_Subscenes_SubsceneId",
                table: "Prices",
                column: "SubsceneId",
                principalTable: "Subscenes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Purchases_Entrances_EntranceId",
                table: "Purchases",
                column: "EntranceId",
                principalTable: "Entrances",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Purchases_Subscenes_SubsceneId",
                table: "Purchases",
                column: "SubsceneId",
                principalTable: "Subscenes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
