

namespace REST_EF_MVC {
    public class Person : Entity
    {
        public string name { get; set; }

        public string surname { get; set; }

        public string age { get; set; }

        public string gender { get; set; }

        public string phoneCode { get; set; }

        public string phoneNum { get; set; }

        public string email { get; set; }

        public  Address address { get; set; }

        public  Login login { get; set; }
    }
}
