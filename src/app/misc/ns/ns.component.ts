import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { ManagementService } from "../../shared/services/management.service";

@Component({
  selector: 'app-ns',
  templateUrl: './ns.component.html',
  styleUrls: ['./ns.component.scss'],
})
export class NsComponent implements OnInit {
  type: 'sub' | 'notSub';


mgmt = this.mgmtsvc.getAll();
  custName: string;
  ticket: string;
  reason: string;
  stNight: string;
  sClose: string;
  sEod: string;
  notes: string;
  emailContent: string;
  emailContentEncoded: string;

  constructor(private mgmtsvc: ManagementService) {
    this.emailContent = 
    `
Store:
${this.custName}

Task:
${this.reason}

When:
${this.stNight}

Store Closes At: 
${this.sClose}

EOD Runs At: 
${this.sEod}

Notes:
${this.notes}

${this.mgmt}
    `;

    this.emailContentEncoded = encodeURIComponent(this.emailContent);
  }

  ngOnInit() {
    this.type = 'notSub';
  }

  get isSub() {
    return this.type === 'sub';
  }

  onSubmit(form: NgForm) {
    this.type = 'sub';
    console.log(form)
  }
}
