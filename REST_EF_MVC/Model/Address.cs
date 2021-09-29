

namespace REST_EF_MVC
{
    public class Address : Entity
    {
        public string street { get; set; }

        public string building { get; set; }

        public string flatNo { get; set; }

        public string city { get; set; }

        public string zip { get; set; }

        public string country { get; set; }
    }
}
