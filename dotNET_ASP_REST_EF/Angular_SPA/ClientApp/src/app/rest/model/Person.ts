import { Login } from './Login';
import { Address } from './Address';

export class Person {
    login: Login;
    
    //id: number;
    name: string;
    surname: string;
    age: string;
    gender: string;
    phoneCode: string;
    phoneNum: string;
    email: string;

    address: Address;

    constructor() {}

    
    setLogin(login: Login) {
        this.login = login;
    } 
    setName(name: string) {
        this.name = name;
    } 
    setSurname(surname: string) {
        this.surname = surname;
    } 
    setAge(age: string) {
        this.age = age;
    } 
    setGender(gender: string) {
        this.gender = gender;
    } 
    setPhoneCode(phoneCode: string) {
        this.phoneCode = phoneCode;
    } 
    setPhoneNum(phoneNum: string) {
        this.phoneNum = phoneNum;
    } 
    setEmail(email: string) {
        this.email = email;
    } 
    setAddress(address: Address){
        this.address = address;
    }

    getCustomPerson(): Person {
        this.name="Adam";
        this.name="Nowak";
        return this;
    }
    
}