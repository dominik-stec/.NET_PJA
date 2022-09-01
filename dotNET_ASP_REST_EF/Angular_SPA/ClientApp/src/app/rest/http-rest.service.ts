import { Injectable, Inject } from '@angular/core';
import { Model } from './model/Model';
import { HttpClient } from '@angular/common/http';
import { Config } from './Config';
import { Person } from './model/Person';
import { HttpHeaders } from '@angular/common/http';

//import 'rxjs/add/operator/Map';


@Injectable()
export class HttpRestService {

  //config: Config = new Config(); 

  constructor(private model: Model,
              private httpClient: HttpClient,
              private urlConfig: Config              
             ) { }

  getQuery(): Array<Person> {
    let persons: Array<Person>; 
    this.httpClient.get<Array<Person>>(
       this.urlConfig.getUrl())
       .subscribe(
            response => {
              persons = response;
            }
         );
         return persons;
  }

  setQuery(person: Person) {
    const headers = new HttpHeaders({'Content-Type':'application/json', 'Accept': 'application/json'});
    this.httpClient.post(this.urlConfig.getUrl(), person, { headers: headers })
   .subscribe()
  }


  //tests
  test() {
    console.log("tested");
    
    this.model;
    
    console.log("tested");
  }
}
