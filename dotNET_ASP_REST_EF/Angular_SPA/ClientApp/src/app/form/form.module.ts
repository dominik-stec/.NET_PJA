import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { StartLoginComponent } from './start-login/start-login.component';
import { WhiteSpaceValidatorDirective } from './white-space-validator.directive'; 
import { ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { Model } from '../rest/model/Model';
import { HttpRestService } from "../rest/http-rest.service";
import { RestPostComponent } from '../rest/rest-post/rest-post.component';
import { RestModule } from '../rest/rest.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RestModule
  ],
  declarations: [
    RegisterComponent,
    RegisterFormComponent,
    StartLoginComponent,
    WhiteSpaceValidatorDirective,
    MainPageComponent
    
  ],
  exports: [
    RegisterComponent,
    RegisterFormComponent,
    StartLoginComponent,
    WhiteSpaceValidatorDirective,
    MainPageComponent
  ],
  providers: [
    { provide: HttpRestService, useClass: HttpRestService },
    { provide: Model, useClass: Model }
  ]
})
export class FormModule { }
