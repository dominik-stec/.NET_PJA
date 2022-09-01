import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestPostComponent } from './rest-post/rest-post.component';
import { HttpRestService } from './http-rest.service';
import { HttpClientModule } from '@angular/common/http';
import { Model } from './model/Model';
import { Config } from './Config';

@NgModule({
  declarations: [RestPostComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    
  ],
  exports: [RestPostComponent],
  providers: [ {  provide: HttpRestService, useClass: HttpRestService  },
               {  provide: Config, useClass: Config }            
  ]

})
export class RestModule { }
