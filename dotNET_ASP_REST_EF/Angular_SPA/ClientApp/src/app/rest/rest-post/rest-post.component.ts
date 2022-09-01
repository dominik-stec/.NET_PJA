import { Component, OnInit } from '@angular/core';
import { Person } from '../model/Person';
import { Model } from '../model/Model';

@Component({
  selector: 'app-rest-post',
  templateUrl: './rest-post.component.html',
  styleUrls: ['./rest-post.component.css']
})
export class RestPostComponent implements OnInit {

  persons: Array<Person>;
  id: number = 0;

  constructor(private model: Model) { }

  ngOnInit() {
    this.persons = this.model.getPersons();
    this.id++;
  }

  write(person: Person) {
    this.model.persons.push(person);
  }

  read(): Array<Person> {
    return this.model.persons;
  }

  getId(): number {
    
    return this.id;
  }
}
