import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public showDiv: boolean = false;
  @Output() loginToggle = new EventEmitter<boolean>();
 

  constructor() { }

  ngOnInit() {
   
  }

  

  registerToggle() {
    if (this.showDiv) this.showDiv = !this.showDiv
    else this.showDiv = !this.showDiv;
    this.hideLogin(this.showDiv);
  }

  hideLogin(trueOrFalse: boolean) {
    this.loginToggle.emit(!trueOrFalse);
  }
}
