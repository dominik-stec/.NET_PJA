using REST_EF_MVC.Controllers;
using System;

namespace REST_EF_MVC
{
    class Program
    {
        static void Main(string[] args)
        {
            

            Console.WriteLine("Hello World!");
            using (var context = new PersonContext())
            {
                var address = new Address()
                {
                    street = "test"
                };

                context.addresses.Add(address);
                context.SaveChanges();

            }

            

        }
    }
}
