using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using REST_EF_MVC.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace REST_EF_MVC.web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    [Consumes("application/json")]
    //[Consumes("text/plain")]
    public class PersonsController : Controller
    {
        private IPersonsRepository persons;

        public PersonsController(PersonsRepository persons)
        {
            this.persons = persons;
        }
        
        [EnableCors("AllowMyOrigin")]
        [HttpGet]
        public List<Person> Get()
        {
            return persons.Get();
        }

        [EnableCors("AllowMyOrigin")]
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var person = persons.GetById(id);

            if(person != null)
            {
                return new ObjectResult(person);
            }
            else
            {
                return new NotFoundResult();
            }
        }

        [EnableCors("AllowMyOrigin")]
        [HttpPut]
        public IActionResult Put([FromBody]Person person)
        {
            if(person != null)
            {
                persons.Update(person);

                return new OkResult();
            }
            else
            {
                return new NotFoundResult();
            }
        }

        [EnableCors("AllowMyOrigin")]
        [HttpPost]
        public IActionResult Post([FromBody]Person person)
        {
            if (person != null)
            {
                persons.Add(person);

                return new OkResult();
            }
            else
            {
                return new NotFoundResult();
            }
        }

        [EnableCors("AllowMyOrigin")]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var person = persons.GetById(id);

            if (person != null)
            {
                persons.Remove(person);

                return new OkResult();
            }
            else
            {
                return new NotFoundResult();
            }
        }
    }
}
