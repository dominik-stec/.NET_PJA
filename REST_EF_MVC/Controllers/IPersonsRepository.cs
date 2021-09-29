using System.Collections.Generic;

namespace REST_EF_MVC.Controllers
{
    public interface IPersonsRepository
    {
        List<Person> Get();
        Person GetById(int id);
        void Add(Person person);
        void Update(Person person);
        void Remove(Person person);
    }
}
