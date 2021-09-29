using REST_EF_MVC.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;

namespace REST_EF_MVC.Controllers
{
    public class PersonsRepository : IPersonsRepository
    {
        private List<Person> persons = new List<Person>();
        private PersonContext context = new PersonContext();
        private Person dbPerson = new Person();
        private Login dbLogin = new Login();
        private Address dbAddress = new Address();

        public void Add(Person person)
        {
            try
            {
                
                //dbPerson.id = 10;
                dbPerson.name = person.name;
                dbPerson.surname = person.surname;
                dbPerson.age = person.age;
                dbPerson.gender = person.gender;
                dbPerson.phoneCode = person.phoneCode;
                dbPerson.phoneNum = person.phoneNum;
                dbPerson.email = person.email;

                //dbLogin.id = dbPerson.id;
                dbLogin.login = person.login.login;
                dbLogin.passwd = person.login.passwd;
                dbPerson.login = dbLogin;

                //dbAddress.id = dbPerson.id;
                dbAddress.street = person.address.street;
                dbAddress.building = person.address.building;
                dbAddress.flatNo = person.address.flatNo;
                dbAddress.city = person.address.city;
                dbAddress.zip = person.address.zip;
                dbAddress.country = person.address.country;
                dbPerson.address = dbAddress;                                    
                                   
                
                //person.id = AssignId();
                //persons.Add(person);
                context.persons.Add(dbPerson);
                //Console.WriteLine(person);
                context.SaveChanges();
            }
            catch(Exception ex)
            {
                throw new PersonAddException(ex.Message);
            }
        }

        public List<Person> Get()
        {
            return context.persons.ToList<Person>();
        }

        public Person GetById(int id)
        {
            return context.persons.ToList<Person>().FirstOrDefault();
        }

        public void Remove(Person person)
        {
            try
            {
                                
                //TODO

            }
            catch (Exception ex)
            {
                throw new PersonRemoveException(ex.Message);
            }
        }

        public void Update(Person person)
        {
            try
            {
                //TODO
            }
            catch(Exception ex)
            {
                throw new PersonUpdateException(ex.Message);
            }
        }
        //OLD
        public void GenerateSampleData()
        {
            Add(new Person()
            {
                name = "Jan",
                surname = "Kowalski",
                age = "34",
                gender = "mezczyzna",
                phoneCode = "48",
                phoneNum = "123321123",
                email = "jan@kowalski.net"
            });

            Add(new Person()
            {
                name = "Zuzanna",
                surname = "Kowalska",
                age = "32",
                gender = "kobieta",
                phoneCode = "48",
                phoneNum = "456654456",
                email = "zuzia@kowalska.net"
            });
        }
        //OLD 
        private int AssignId()
        {
            var id = 0;

            if(persons.Count > 0)
            {
                id = persons.Max(p => p.id) + 1;
            }

            return id;
        }
    }
}
