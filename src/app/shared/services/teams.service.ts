import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  managers = [
    { id: 0, team: 'A', title: 'MGR', name: 'David Sherill', phone: '806.123.4567' },
    { id: 1, team: 'B', title: 'MGR', name: 'Robert Smith', phone: '806.123.4567' },
    { id: 2, team: 'C', title: 'MGR', name: 'Corey Jones', phone: '806.123.4567' },
    { id: 3, team: 'D', title: 'MGR', name: 'Sharee Raemakers', phone: '806.123.4567' },
    { id: 4, team: 'E', title: 'MGR', name: 'Daimian Marquez', phone: '806.123.4567' },
    { id: 5, team: 'I', title: 'MGR', name: 'Jackie Warnock', phone: '806.123.4567' },
  ];

  leads = [
    { id: 0, team: 'A', title: 'Lead', name: 'Joe Sena', phone: '806.123.4567' },    
    { id: 1, team: 'C', title: 'Lead', name: 'William Gordon', phone: '806.123.4567' },
    { id: 2, team: 'D', title: 'Lead', name: 'Noah Conard', phone: '806.123.4567' },
    { id: 3, team: 'E', title: 'Lead', name: 'Erick Guerin', phone: '806.123.4567' },
  ];

  leadership = [
    { id: 0, title: 'Director of Support' , name: 'Jon Werth', phone: '806.123.4567'},
    { id: 1, title: 'Support Manager' , name: 'Joe Cabello', phone: '806.123.4567'}
  ];

  escalation = [
    {id: 0, name: 'Paul Willoughby ', phone: '806.123.4567'},
    {id: 1, name: 'Zack Antilley ', phone: '806.123.4567'},
    {id: 2, name: 'Jeff Tarlton ', phone: '806.123.4567'},
    {id: 3, name: 'William Rice ', phone: '806.123.4567'},
    {id: 4, name: 'William Addison ', phone: '806.123.4567'},
    {id: 5, name: 'Brett Bennett ', phone: '806.123.4567'},
    {id: 6, name: 'Kristian Tzokanow', phone: '806.123.4567'},
    {id: 7, name: 'Bobby Ramos', phone: '806.123.4567'}
  ]

  getLeadership() {
    return this.leadership;
  }
  getAllMgr() {
    return this.managers;
  }

  GetAllLead() {
    return this.leads;
  }

  getWholeTeam() {
    return this.managers;
  }

  getEscalationTeam() {
    return this.escalation;
  }

  constructor() {}
}
