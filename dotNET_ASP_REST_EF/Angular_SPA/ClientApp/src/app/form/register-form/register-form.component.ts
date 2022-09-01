import { Component, OnInit,  } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';
import { HttpRestService } from '../../rest/http-rest.service';
import { Person } from '../../rest/model/Person';
import { Login } from '../../rest/model/Login';
import { Address } from '../../rest/model/Address';
import { RestPostComponent } from 'src/app/rest/rest-post/rest-post.component';
import { Model } from 'src/app/rest/model/Model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerDone: boolean; 

  constructor(private fb: FormBuilder, private http: HttpRestService, private model: Model) { }

  ngOnInit() {
    let streetCtrl = this.registerForm.get('user.address.street');
    let buildingCtrl = this.registerForm.get('user.address.building');
    let flatNoCtrl = this.registerForm.get('user.address.flatNo');
    let cityCtrl = this.registerForm.get('user.address.city');
    let zipCtrl = this.registerForm.get('user.address.zip');
    let countryCtrl = this.registerForm.get('user.address.country');

    streetCtrl.clearValidators();
    buildingCtrl.clearValidators();
    flatNoCtrl.clearValidators();
    cityCtrl.clearValidators();
    zipCtrl.clearValidators();
    countryCtrl.clearValidators();

    zipCtrl.setValidators([Validators.pattern("[0-9]{2}-[0-9]{3}")]);

    streetCtrl.updateValueAndValidity();
    buildingCtrl.updateValueAndValidity();
    flatNoCtrl.updateValueAndValidity();
    cityCtrl.updateValueAndValidity();
    zipCtrl.updateValueAndValidity();
    countryCtrl.updateValueAndValidity();

    this.registerDone = false;
  }

  registerForm = this.fb.group({
    login: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    passwordRpt: ['', [Validators.required]],
    user: this.fb.group({
      name: [''],
      surname: [''],
      age: ['', [Validators.maxLength(3)]],
      gender: [''],
      phoneCode: [''],
      phoneNum: [''],
      email: ['', [Validators.required]],
      address: this.fb.group({
        street: ['', [Validators.required]],
        building: [''],
        flatNo: [''],
        city: [''],
        zip: [''],
        country: ['']
      })
    })
  });

  get login() { return this.registerForm.get('login'); }
  get password() { return this.registerForm.get('password'); }
  get passwordRpt() { return this.registerForm.get('passwordRpt'); }
  get name(){ return this.registerForm.get('user.name'); }
  get surname() { return this.registerForm.get('user.surname'); }
  get age() { return this.registerForm.get('user.age'); }
  get gender() { return this.registerForm.get('user.gender'); }
  get phoneCode() { return this.registerForm.get('user.phoneCode'); }
  get phoneNum() { return this.registerForm.get('user.phoneNum'); }
  get email() { return this.registerForm.get('user.email'); }
  get street() { return this.registerForm.get('user.address.street'); }
  get building() { return this.registerForm.get('user.address.building'); }
  get flatNo() { return this.registerForm.get('user.address.flatNo'); }
  get city() { return this.registerForm.get('user.address.city'); }
  get zip() { return this.registerForm.get('user.address.zip'); }
  get country() { return this.registerForm.get('user.address.country'); }

  streetValidation(event: any) {

    //let streetCtrl = this.registerForm.get('user.address.street');
    let buildingCtrl = this.registerForm.get('user.address.building');
    let flatNoCtrl = this.registerForm.get('user.address.flatNo');
    let cityCtrl = this.registerForm.get('user.address.city');
    let zipCtrl = this.registerForm.get('user.address.zip');
    let countryCtrl = this.registerForm.get('user.address.country');

    if (event.target.value !== "") {

      //streetCtrl.setValidators([Validators.required]);
      buildingCtrl.setValidators([Validators.required]);
      flatNoCtrl.setValidators([Validators.required]);
      cityCtrl.setValidators([Validators.required]);
      zipCtrl.setValidators([Validators.required]);
      countryCtrl.setValidators([Validators.required]);

      //streetCtrl.updateValueAndValidity();
      buildingCtrl.updateValueAndValidity();
      flatNoCtrl.updateValueAndValidity();
      cityCtrl.updateValueAndValidity();
      zipCtrl.updateValueAndValidity();
      countryCtrl.updateValueAndValidity();

    } else {
      //streetCtrl.clearValidators();
      buildingCtrl.clearValidators();
      flatNoCtrl.clearValidators();
      cityCtrl.clearValidators();
      zipCtrl.clearValidators();
      countryCtrl.clearValidators();

      //streetCtrl.updateValueAndValidity();
      buildingCtrl.updateValueAndValidity();
      flatNoCtrl.updateValueAndValidity();
      cityCtrl.updateValueAndValidity();
      zipCtrl.updateValueAndValidity();
      countryCtrl.updateValueAndValidity();
            
    }
  }

  buildingValidation(event: any) {

    let streetCtrl = this.registerForm.get('user.address.street');
    //let buildingCtrl = this.registerForm.get('user.address.building');
    let flatNoCtrl = this.registerForm.get('user.address.flatNo');
    let cityCtrl = this.registerForm.get('user.address.city');
    let zipCtrl = this.registerForm.get('user.address.zip');
    let countryCtrl = this.registerForm.get('user.address.country');

    if (event.target.value !== "") {

      streetCtrl.setValidators([Validators.required]);
      //buildingCtrl.setValidators([Validators.required]);
      flatNoCtrl.setValidators([Validators.required]);
      cityCtrl.setValidators([Validators.required]);
      zipCtrl.setValidators([Validators.required]);
      countryCtrl.setValidators([Validators.required]);

      streetCtrl.updateValueAndValidity();
      //buildingCtrl.updateValueAndValidity();
      flatNoCtrl.updateValueAndValidity();
      cityCtrl.updateValueAndValidity();
      zipCtrl.updateValueAndValidity();
      countryCtrl.updateValueAndValidity();

    } else {
      streetCtrl.clearValidators();
      //buildingCtrl.clearValidators();
      flatNoCtrl.clearValidators();
      cityCtrl.clearValidators();
      zipCtrl.clearValidators();
      countryCtrl.clearValidators();

      streetCtrl.updateValueAndValidity();
      //buildingCtrl.updateValueAndValidity();
      flatNoCtrl.updateValueAndValidity();
      cityCtrl.updateValueAndValidity();
      zipCtrl.updateValueAndValidity();
      countryCtrl.updateValueAndValidity();
           
    }
  }

  flatNoValidation(event: any) {

    let streetCtrl = this.registerForm.get('user.address.street');
    let buildingCtrl = this.registerForm.get('user.address.building');
    //let flatNoCtrl = this.registerForm.get('user.address.flatNo');
    let cityCtrl = this.registerForm.get('user.address.city');
    let zipCtrl = this.registerForm.get('user.address.zip');
    let countryCtrl = this.registerForm.get('user.address.country');

    if (event.target.value !== "") {

      streetCtrl.setValidators([Validators.required]);
      buildingCtrl.setValidators([Validators.required]);
      //flatNoCtrl.setValidators([Validators.required]);
      cityCtrl.setValidators([Validators.required]);
      zipCtrl.setValidators([Validators.required]);
      countryCtrl.setValidators([Validators.required]);

      streetCtrl.updateValueAndValidity();
      buildingCtrl.updateValueAndValidity();
      //flatNoCtrl.updateValueAndValidity();
      cityCtrl.updateValueAndValidity();
      zipCtrl.updateValueAndValidity();
      countryCtrl.updateValueAndValidity();
      
    } else {
      streetCtrl.clearValidators();
      buildingCtrl.clearValidators();
      //flatNoCtrl.clearValidators();
      cityCtrl.clearValidators();
      zipCtrl.clearValidators();
      countryCtrl.clearValidators();

      streetCtrl.updateValueAndValidity();
      buildingCtrl.updateValueAndValidity();
      //flatNoCtrl.updateValueAndValidity();
      cityCtrl.updateValueAndValidity();
      zipCtrl.updateValueAndValidity();
      countryCtrl.updateValueAndValidity();

    }
  }

  cityValidation(event: any) {

    let streetCtrl = this.registerForm.get('user.address.street');
    let buildingCtrl = this.registerForm.get('user.address.building');
    let flatNoCtrl = this.registerForm.get('user.address.flatNo');
    //let cityCtrl = this.registerForm.get('user.address.city');
    let zipCtrl = this.registerForm.get('user.address.zip');
    let countryCtrl = this.registerForm.get('user.address.country');

    if (event.target.value !== "") {

      streetCtrl.setValidators([Validators.required]);
      buildingCtrl.setValidators([Validators.required]);
      flatNoCtrl.setValidators([Validators.required]);
      //cityCtrl.setValidators([Validators.required]);
      zipCtrl.setValidators([Validators.required]);
      countryCtrl.setValidators([Validators.required]);

      streetCtrl.updateValueAndValidity();
      buildingCtrl.updateValueAndValidity();
      flatNoCtrl.updateValueAndValidity();
      //cityCtrl.updateValueAndValidity();
      zipCtrl.updateValueAndValidity();
      countryCtrl.updateValueAndValidity();

    } else {
      streetCtrl.clearValidators();
      buildingCtrl.clearValidators();
      flatNoCtrl.clearValidators();
      //cityCtrl.clearValidators();
      zipCtrl.clearValidators();
      countryCtrl.clearValidators();

      streetCtrl.updateValueAndValidity();
      buildingCtrl.updateValueAndValidity();
      flatNoCtrl.updateValueAndValidity();
      //cityCtrl.updateValueAndValidity();
      zipCtrl.updateValueAndValidity();
      countryCtrl.updateValueAndValidity();

    }
  }

  zipValidation(event: any) {

    let streetCtrl = this.registerForm.get('user.address.street');
    let buildingCtrl = this.registerForm.get('user.address.building');
    let flatNoCtrl = this.registerForm.get('user.address.flatNo');
    let cityCtrl = this.registerForm.get('user.address.city');
    //let zipCtrl = this.registerForm.get('user.address.zip');
    let countryCtrl = this.registerForm.get('user.address.country');

    if (event.target.value !== "") {

      streetCtrl.setValidators([Validators.required]);
      buildingCtrl.setValidators([Validators.required]);
      flatNoCtrl.setValidators([Validators.required]);
      cityCtrl.setValidators([Validators.required]);
      //zipCtrl.setValidators([Validators.required]);
      countryCtrl.setValidators([Validators.required]);

      streetCtrl.updateValueAndValidity();
      buildingCtrl.updateValueAndValidity();
      flatNoCtrl.updateValueAndValidity();
      cityCtrl.updateValueAndValidity();
      //zipCtrl.updateValueAndValidity();
      countryCtrl.updateValueAndValidity();
      
    } else {
      streetCtrl.clearValidators();
      buildingCtrl.clearValidators();
      flatNoCtrl.clearValidators();
      cityCtrl.clearValidators();
      //zipCtrl.clearValidators();
      countryCtrl.clearValidators();

      streetCtrl.updateValueAndValidity();
      buildingCtrl.updateValueAndValidity();
      flatNoCtrl.updateValueAndValidity();
      cityCtrl.updateValueAndValidity();
      //zipCtrl.updateValueAndValidity();
      countryCtrl.updateValueAndValidity();
     
    }
  }

  countryValidation(event: any) {

    let streetCtrl = this.registerForm.get('user.address.street');
    let buildingCtrl = this.registerForm.get('user.address.building');
    let flatNoCtrl = this.registerForm.get('user.address.flatNo');
    let cityCtrl = this.registerForm.get('user.address.city');
    let zipCtrl = this.registerForm.get('user.address.zip');
    //let countryCtrl = this.registerForm.get('user.address.country');

    if (event.target.value !== "") {
      
      streetCtrl.setValidators([Validators.required]);
      buildingCtrl.setValidators([Validators.required]);
      flatNoCtrl.setValidators([Validators.required]);
      cityCtrl.setValidators([Validators.required]);
      zipCtrl.setValidators([Validators.required]);
      //countryCtrl.setValidators([Validators.required]);

      streetCtrl.updateValueAndValidity();
      buildingCtrl.updateValueAndValidity();
      flatNoCtrl.updateValueAndValidity();
      cityCtrl.updateValueAndValidity();
      zipCtrl.updateValueAndValidity();
      //countryCtrl.updateValueAndValidity();      

    } else {
      streetCtrl.clearValidators();
      buildingCtrl.clearValidators();
      flatNoCtrl.clearValidators();
      cityCtrl.clearValidators();
      zipCtrl.clearValidators();
      //countryCtrl.clearValidators();

      streetCtrl.updateValueAndValidity();
      buildingCtrl.updateValueAndValidity();
      flatNoCtrl.updateValueAndValidity();
      cityCtrl.updateValueAndValidity();
      zipCtrl.updateValueAndValidity();
      //countryCtrl.updateValueAndValidity();     
    }
  }

  //let streetCtrl = this.registerForm.get('user.address.street').value;
    //console.log(streetCtrl);
    //let streetAdd = this.registerForm.get('user.address').setValidators([Validators.required]);
  

  onSubmit() {
    console.log("submit");
    //console.log(this.registerForm.get('login').value);
    //http.readForm(). 
    //console.log(this.http.getQuery()); 
    
    let person: Person = new Person();
    //person.setId(10);
    person.setName(this.registerForm.get('user.name').value);
    person.setSurname(this.registerForm.get('user.surname').value);
    person.setAge(this.registerForm.get('user.age').value);
    person.setGender(this.registerForm.get('user.gender').value);
    person.setPhoneCode(this.registerForm.get('user.phoneCode').value);
    person.setPhoneNum(this.registerForm.get('user.phoneNum').value);
    person.setEmail(this.registerForm.get('user.email').value);

    let address: Address = new Address();
    //address.setId(10);
    address.setStreet(this.registerForm.get('user.address.street').value);
    address.setBuilding(this.registerForm.get('user.address.building').value);
    address.setFlatNo(this.registerForm.get('user.address.flatNo').value);
    address.setCity(this.registerForm.get('user.address.city').value);
    address.setZip(this.registerForm.get('user.address.zip').value);
    address.setCountry(this.registerForm.get('user.address.country').value);

    let login: Login = new Login();
    //login.setId(10);
    login.setLogin(this.registerForm.get('login').value);
    login.setPassword(this.registerForm.get('password').value);
    login.setPasswordRpt(this.registerForm.get('passwordRpt').value);

    person.setLogin(login);
    person.setAddress(address);

    
    /* 
    this.http.setQuery(person);
    console.log(person);
    console.log("submit");
    //console.log(this.http.getQuery());
    */

    this.model.getPersons().push(person);

    this.registerDone = true;
  }

  
}
