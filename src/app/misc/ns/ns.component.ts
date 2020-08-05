import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ManagementService } from "../../shared/services/management.service";

@Component({
  selector: 'app-ns',
  templateUrl: './ns.component.html',
  styleUrls: ['./ns.component.scss'],
})
export class NsComponent implements OnInit {
  type: 'sub' | 'notSub';


  mgmt = this.mgmtsvc.getAll();
  form;
  custName = '';
  ticket = '';
  reason = '';
  stNight = '';
  sClose = '';
  sEod = '';
  notes = '';
  emailContent;
  emailContentEncoded;

  constructor(private mgmtsvc: ManagementService) {}
  

  ngOnInit() {
    this.type = 'notSub';
  }

  get isSub() {
    return this.type === 'sub';
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.type = 'sub';
    this.emailContent = 
    ` Store: ${form.value.custName}

    Task: ${form.value.reason}

    When: ${form.value.stNight}

    Store Closes At: ${form.value.sClose}

    EOD Runs At: ${form.value.sEod}

    Notes: ${form.value.notes}

    ${this.mgmt}
        `;

    this.emailContentEncoded = encodeURIComponent(this.emailContent);
  }
  }
