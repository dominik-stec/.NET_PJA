using System;
namespace ASP_REST.Model
{
    public class User
    {
        public Login login { set; get; }
        public Person person { set; get; }
        public Address address { set; get; }
    }
}

