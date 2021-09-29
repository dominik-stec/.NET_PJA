using System;

namespace REST_EF_MVC.Exceptions
{
    class PersonUpdateException : Exception
    {
        public PersonUpdateException(string message) : base(message)
        {
        }
    }
}
