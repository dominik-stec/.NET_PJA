using System;
using System.Data.Entity;
using ASP_REST.Model;

//mismatch between .Net core 3.x and .Net 6.x
namespace EF_Database
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext()
        : base("DefaultConnection")
        {
            Database.Initialize(false);
        }

        public DbSet<Login> Logins { get; set; }
        public DbSet<Person> Persons { get; set; }
        public DbSet<Address> Addresses { get; set; }

    }
}

