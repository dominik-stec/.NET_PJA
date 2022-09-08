using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace REST_EF_MVC.Migrations
{
    public partial class CreatePersonDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "addresses",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    street = table.Column<string>(nullable: true),
                    building = table.Column<string>(nullable: true),
                    flatNo = table.Column<string>(nullable: true),
                    city = table.Column<string>(nullable: true),
                    zip = table.Column<string>(nullable: true),
                    country = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_addresses", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "logins",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    login = table.Column<string>(nullable: true),
                    passwd = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_logins", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "persons",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    name = table.Column<string>(nullable: true),
                    surname = table.Column<string>(nullable: true),
                    age = table.Column<string>(nullable: true),
                    gender = table.Column<string>(nullable: true),
                    phoneCode = table.Column<string>(nullable: true),
                    phoneNum = table.Column<string>(nullable: true),
                    email = table.Column<string>(nullable: true),
                    addressid = table.Column<int>(nullable: true),
                    loginid = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_persons", x => x.id);
                    table.ForeignKey(
                        name: "FK_persons_addresses_addressid",
                        column: x => x.addressid,
                        principalTable: "addresses",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_persons_logins_loginid",
                        column: x => x.loginid,
                        principalTable: "logins",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_persons_addressid",
                table: "persons",
                column: "addressid");

            migrationBuilder.CreateIndex(
                name: "IX_persons_loginid",
                table: "persons",
                column: "loginid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "persons");

            migrationBuilder.DropTable(
                name: "addresses");

            migrationBuilder.DropTable(
                name: "logins");
        }
    }
}
