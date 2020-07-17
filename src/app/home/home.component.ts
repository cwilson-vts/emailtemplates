import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

interface Templates {
  id: string,
  name: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  pathID: string;
  selected: string;
  constructor(private router: Router) { }
  templates: Templates[] = [
    {id:'ns' , name:'Night Shift Appointment'},
    {id:'l3esc', name:'L3 Escalation'}
  ];

  onSubmit(selected){
  console.log(selected)
  selected = this.selected
  this.router.navigate([this.selected])
  }
}
