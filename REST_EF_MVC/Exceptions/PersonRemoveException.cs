using System;
using System.Collections.Generic;
using System.Text;

namespace REST_EF_MVC.Exceptions
{
    class PersonRemoveException : Exception
    {
        public PersonRemoveException(string message) : base(message)
        {
        }
    }
}
