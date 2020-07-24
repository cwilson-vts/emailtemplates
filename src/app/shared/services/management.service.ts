import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {
  mgmt = [
    { id: 0, title: 'Director of Support', name: 'Bobby Ramos', phone: '806.123.4567' },
    { id: 1, title: 'Support Manager', name: 'Joe Cabello', phone: '806.456.7890' }
  ];
  getAll() {
    return this.mgmt;
  }
  constructor() { }
}
