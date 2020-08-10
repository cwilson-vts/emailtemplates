import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TeamService } from '../../shared/services/teams.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-ns',
  templateUrl: './ns.component.html',
  styleUrls: ['./ns.component.scss'],
})
export class NsComponent implements OnInit {
  type: 'sub' | 'notSub';
  form;
  customerName = '';
  ticket = '';
  reason = '';
  startingNight = '';
  storeClose = '';
  storeEod = '';
  notes = '';
  emailContent;
  emailContentEncoded;

  constructor(private team: TeamService, private sanitizer: DomSanitizer) {}

  fileUrl;
  managers;
  leadership;

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
    this.emailContent = `Store: ${form.value.custName}

    Task: ${form.value.reason}

    When: ${form.value.stNight}

    Store Closes At: ${form.value.sClose}

    EOD Runs At: ${form.value.sEod}

    Notes: ${form.value.notes}
        `;

    this.emailContentEncoded = encodeURIComponent(this.emailContent);
  }

  goBack() {
    this.type = 'notSub';
  }

  sendEmail() {
    const data = `
    To: User <user@domain.demo>
Subject: 🔥 Night Shift Appointment for: {{ customerName }} {{ ticket }} 🔥
X-Unsent: 1
Content-Type: text/html
<p>
    🔥 Night Shift Appointment for: {{ customerName }} {{ ticket }} 🔥
    <br />
    Store: {{ customerName }}<br />
    Task: {{ reason }} <br />
    Starting the Night of: {{ startingNight }} <br />
    Store Close @: {{ storeClose }} <br />
    Store has EOD @: {{ storeEod }} <br />
    Notes: {{ notes }} <br />
  </p>
  <p>Support Leadership <br /></p>

  <div *ngFor="let p of leadership">
    {{ p.title }} - {{ p.name }} - {{ p.phone }}
  </div>
  <br />
  Team Managers:<br />
  <div *ngFor="let m of managers">
    <table>
      <tr>
        <td>Team {{ m.team }}</td>
        <td></td>
        <td>{{ m.name }}</td>
        <td></td>
        <td>{{ m.phone }}</td>
      </tr>
    </table>`;
    const blob = new Blob([data], { type: 'application/octet-stream' });
    
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      window.URL.createObjectURL(blob)
    );
  }
}
