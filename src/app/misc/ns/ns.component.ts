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
  touchUi = true; 
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
    this.emailString =
      'mailto:ncr_l3_escalations@truno.com?cc=bramos@truno.com;jcabello@truno.com&subject=L3%20Escalations%20-%20';
  }
}
