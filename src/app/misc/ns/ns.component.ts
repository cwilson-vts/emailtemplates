import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-ns',
  templateUrl: './ns.component.html',
  styleUrls: ['./ns.component.scss'],
})
export class NsComponent implements OnInit {
  type: 'sub' | 'notSub';
  emailString = '';
  showSpinners = 1;
  showSeconds = false;

  custName: string;
  ticket: string;
  reason: string;
  stNight: string;
  sClose: string;
  sEod: string;
  notes: string;

  constructor() {}

  ngOnInit() {
    this.type = 'notSub';
  }

  get isSub() {
    return this.type === 'sub';
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.type = 'sub';
  }
}
