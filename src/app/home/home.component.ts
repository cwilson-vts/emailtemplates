import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor() { }
  pathID= '';
  templates = [
    {id:'NS' , name:'Night Shift Appointment'},
    {id:'L3ESC', name:'L3 Escalation'}
  ];
}
