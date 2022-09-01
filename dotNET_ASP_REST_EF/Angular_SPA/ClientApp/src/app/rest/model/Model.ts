import { Person } from './Person';
import { Login } from './Login';
import { Address } from './Address';

export class Model {

    persons: Array<Person>;

    person: Person;
    login: Login;
    address: Address;
    
    constructor() {
        this.person = new Person();
        this.login = new Login();
        this.address = new Address();

        this.persons = new Array<Person>();
    }

    getPerson() {
        return this.person;
    }
    getLogin() {
        return this.login;
    }
    getAddress() {
        return this.address;
    }
    getPersons() {
        return this.persons;
    }
}