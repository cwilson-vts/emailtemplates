import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TeamService } from '../../shared/services/teams.service';
import { DomSanitizer } from '@angular/platform-browser';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-ns',
  templateUrl: './ns.component.html',
  styleUrls: ['./ns.component.scss'],
})
export class NsComponent implements OnInit {

  constructor(private team: TeamService, private sanitizer: DomSanitizer) {}

  fileUrl;
  managers;
  leadership;
  type: 'sub' | 'notSub';
  form;
  customerName = '';
  ticket = '';
  reason = '';
  startingNight = '';
  storeClose = '';
  storeEod = '';
  notes = '';
  template = `
  To: User <user@domain.demo>
  Subject: 🔥 Night Shift Appointment for: ${this.customerName} ${this.ticket} 🔥
  X-Unsent: 1
  Content-Type: text/html
  
  <html>
  <head>
  </head>
  <body>
  <p>
      Store: ${this.customerName}<br />
      Task: ${this.reason} <br />
      Starting the Night of: ${this.startingNight} <br />
      Store Close @: ${this.storeClose} <br />
      Store has EOD @: ${this.storeEod} <br />
      Notes: ${this.notes} <br />
    </p>
      </body>
      </html>`;

  ngOnInit() {
    this.type = 'notSub';
    this.managers = this.team.getAllMgr();
    this.leadership = this.team.getLeadership();
  }

  get isSub() {
    return this.type === 'sub';
  }

  onSubmit(form: NgForm) {
    this.type = 'sub';
    console.log(form)
    const blob = new Blob([this.template], {type: 'application/vnd.ms-outlook'});
    if (this.fileUrl !== null) {
      window.URL.revokeObjectURL(this.fileUrl);
    }
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL((blob)))
    console.log(this.fileUrl)
    return this.fileUrl;
  }

  goBack() {
    this.type = 'notSub';
    window.URL.revokeObjectURL(this.fileUrl);
  }
}