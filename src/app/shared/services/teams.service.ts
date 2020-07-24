import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  teams = [
    { id: 0, team: 'A', name: 'David Sherill', phone: '806.123.4567' },
    { id: 1, team: 'A', name: 'Joe Sena', phone: '806.456.7890' },
    { id: 2, team: 'B', name: 'Robert Smith', phone: '147.963.0258' },
    { id: 3, team: 'C', name: 'Corey Jones', phone: '741.852.9630' },
    { id: 4, team: 'C', name: 'William Gordon', phone: '852.963.7410' },
    { id: 5, team: 'D', name: 'Sharee Raemakers', phone: '951.753.8624' },
    { id: 6, team: 'D', name: 'Noah Conards', phone: '357.159.4862' },
    { id: 7, team: 'E', name: 'Daimian Marquez', phone: '806.123.4568' },
    { id: 7, team: 'E', name: 'Erick Guerin', phone: '806.987.6450' },
    { id: 8, team: 'I', name: 'Jackie Warnock', phone: '834.125.9748' },
  ];
  getAllTeams() {
    return this.teams;
  }

  constructor() {}
}
