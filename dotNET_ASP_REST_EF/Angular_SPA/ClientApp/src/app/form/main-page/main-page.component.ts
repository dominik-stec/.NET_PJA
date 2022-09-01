import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  title = 'firma przewozowa BusPass';
  timer: Date;
  interval;

  constructor() {
    this.runTimer();
  }

  runTimer() {
    this.interval = setInterval(
      () => {
        this.timer = new Date();
      }
      , 1000);
  }

}
