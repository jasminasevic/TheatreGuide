using Microsoft.EntityFrameworkCore.Migrations;

namespace EfDataAccess.Migrations
{
    public partial class addsectorSoldTicketsentityandconfigurationimproverepertoireentity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NumberOfSoldTickets",
                table: "Repertoires");

            migrationBuilder.AlterColumn<int>(
                name: "TheatreId",
                table: "Repertoires",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.CreateTable(
                name: "SectorSoldTickets",
                columns: table => new
                {
                    RepertoireId = table.Column<int>(nullable: false),
                    SectorId = table.Column<int>(nullable: false),
                    NumberOfSoldTickets = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SectorSoldTickets", x => new { x.RepertoireId, x.SectorId });
                    table.ForeignKey(
                        name: "FK_SectorSoldTickets_Repertoires_RepertoireId",
                        column: x => x.RepertoireId,
                        principalTable: "Repertoires",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_SectorSoldTickets_Sectors_SectorId",
                        column: x => x.SectorId,
                        principalTable: "Sectors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SectorSoldTickets_SectorId",
                table: "SectorSoldTickets",
                column: "SectorId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SectorSoldTickets");

            migrationBuilder.AlterColumn<int>(
                name: "TheatreId",
                table: "Repertoires",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "NumberOfSoldTickets",
                table: "Repertoires",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
