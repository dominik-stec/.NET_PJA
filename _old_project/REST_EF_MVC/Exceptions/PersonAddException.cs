using System;

namespace REST_EF_MVC.Exceptions
{
    class PersonAddException : Exception
    {
        public PersonAddException(string message) : base(message)
        {
        }
    }
}
