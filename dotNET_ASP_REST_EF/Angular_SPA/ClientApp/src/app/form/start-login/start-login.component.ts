import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Model } from 'src/app/rest/model/Model';
import {Location} from '@angular/common';
import { Person } from 'src/app/rest/model/Person';

@Component({
  selector: 'app-start-login',
  templateUrl: './start-login.component.html',
  styleUrls: ['./start-login.component.css']
})
export class StartLoginComponent implements OnInit {

  showLogin: boolean = true;
  beforeLogin: boolean = true;
  goBack: boolean = true;
  isUserExist: boolean = false;

  passwd: string;
  p: Person;
  nameVal: string;
  surnameVal: string;

  constructor(private fb: FormBuilder, private model: Model) { }

  ngOnInit() {
  }

  loginForm = this.fb.group({
    login: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  get login() { return this.loginForm.get('login'); }
  get password() { return this.loginForm.get('password'); }

  onToggle(toggle: boolean) {
    this.showLogin = toggle;
  }
  
  backClicked() {
    
    this.goBack = !this.goBack;
    this.beforeLogin = !this.beforeLogin;

  }

  passwdCheck(passwd: string): Person {
    let result: Person = new Person();
    this.model.getPersons().forEach( function(p) {
      if(p.login.password === passwd) result = p;
    }); 
    return result
  }

  onSubmit() {
    
    this.beforeLogin = !this.beforeLogin;
    this.goBack = true;
    //console.log("submit");

    if(this.model.getPersons()[0] !== undefined) {
      this.isUserExist = true;
      this.passwd = this.loginForm.get("password").value;
      this.p = this.passwdCheck(this.passwd);
      this.nameVal = this.p.name;
      this.surnameVal = this.p.surname;
    } else {
      this.isUserExist = false;
    }
  }
}
