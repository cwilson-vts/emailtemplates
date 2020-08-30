import { Component, OnInit } from '@angular/core';

import { TeamService } from './../shared/services/teams.service';
import { Router } from '@angular/router';
import { AuthService } from "../shared/services/auth.service";
import { User } from "../shared/models/user";

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
  get authenticated(): boolean {
    return this.authService.authenticated;
  }
  get user(): User {
    return this.authService.user;
  }
  pathID: string;
  selected: string;

  team;
  constructor(public authService: AuthService, private router: Router) {}
  templates: Templates[] = [
    { id: 'ns', name: 'Night Shift Appointment' },
    { id: 'l3esc', name: 'L3 Escalation' },
  ];

  ngOnInit() {
  }

async signIn(): Promise<void> {
  await this.authService.signIn()
}

  onSubmit(selected) {
    console.log(selected);
    selected = this.selected;
    this.router.navigate([this.selected]);
  }
}
