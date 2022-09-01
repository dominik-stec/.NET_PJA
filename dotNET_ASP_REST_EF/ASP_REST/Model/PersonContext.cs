//using Microsoft.EntityFrameworkCore;
//using System;
//using System.Collections.Generic;
//using System.Text;

//namespace ASP_REST.Model
//{
//    public class PersonContext : DbContext
//    {
//        public DbSet<Person> persons { get; set; }
//        public DbSet<Address> addresses { get; set; }
//        public DbSet<Login> logins { get; set; }

//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//            //optionsBuilder.UseSqlServer(@"Server=.\SQLEXPRESS;Database=PersonDB;Trusted_Connection=True;");
//            optionsBuilder.UseSqlServer(@"Data Source = (localdb)\MSSQLLocalDB;Integrated Security = True; Persist Security Info=False;Pooling=False;MultipleActiveResultSets=False;Encrypt=False;TrustServerCertificate=True");
//        }
//    }
//}
