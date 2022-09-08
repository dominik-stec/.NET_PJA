using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ASP_REST.Model;
using Microsoft.AspNetCore.Cors;
using Newtonsoft.Json;

namespace ASP_REST.Controllers
{
    [ApiController]
    [EnableCors]
    [Route("/api/database")]
    public class WeatherForecastController : ControllerBase
    {

        static IList<User> users = new List<User>();


        [HttpGet]
        [Produces("application/json")]
        public String Get()
        {
            if (users.Count() != 0)
            {
                string s = JsonConvert.SerializeObject(users);
                return s;
            } else
            {
                return "Run Angular SPA and register new user by web form after that refresh page";
            }
        }


        [HttpPost]
        [Consumes("application/json")]
        public String PostAngularForm([FromBody] User user)
        {
            users.Add(user);
            return "add new user";
        }

    }
}

