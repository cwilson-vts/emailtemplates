import { TeamService } from './../shared/services/teams.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

interface Templates {
  id: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pathID: string;
  selected: string;

  team;
  constructor(private router: Router, private teams: TeamService) {}
  templates: Templates[] = [
    { id: 'ns', name: 'Night Shift Appointment' },
    { id: 'l3esc', name: 'L3 Escalation' },
  ];

  ngOnInit() {
    this.team = this.teams.getWholeTeam();
    return this.team
  }

  onSubmit(selected) {
    console.log(selected);
    selected = this.selected;
    this.router.navigate([this.selected]);
  }
}
