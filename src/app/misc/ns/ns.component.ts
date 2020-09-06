import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TeamService } from '../../shared/services/teams.service';
import { Client } from '@microsoft/microsoft-graph-client';
import { MgtPeoplePicker } from '@microsoft/mgt';

import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-ns',
  templateUrl: './ns.component.html',
  styleUrls: ['./ns.component.scss'],
})
export class NsComponent implements OnInit {
  graphClient: Client;

  constructor(private team: TeamService, private authService: AuthService) {
    this.graphClient = Client.init({
      authProvider: async (done) => {
        let token = await this.authService.getAccessToken().catch((reason) => {
          done(reason, null);
        });

        if (token) {
          done(null, token);
        } else {
          done('Could not get an access token', null);
        }
      },
    });
  }
  ngOnInit() {
    this.type = 'notSub';
    this.managers = this.team.getAllMgr();
    this.leadership = this.team.getLeadership();
  }

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
  mail = {};
  mailSubject = `🔥 Night Shift Appointment for: ${this.customerName} ${this.ticket} 🔥`;
  mailToRecipients = [{ emailAddress: { address: 'supportteamn@truno.com' } }];
  mailCCRecipients = [];
  mailBody = [
    {
      content: `<p>
        Store: ${this.customerName}<br />
        Task: ${this.reason} <br />
        Starting the Night of: ${this.startingNight} <br />
        Store Close @: ${this.storeClose} <br />
        Store has EOD @: ${this.storeEod} <br />
        Notes: ${this.notes} <br />
        </p>
      `,
      contentType: 'html',
    },
  ];

  get isSub() {
    return this.type === 'sub';
  }

  onSubmit(form: NgForm) {
    this.type = 'sub';
    console.log(form);
  }

  async sendMail() {
    let response = await this.graphClient
      .api('/me/sendMail')
      .post({ message: this.mail });
    console.log(response);
  }
  catch(error) {
    throw error;
  }
  goBack() {
    this.type = 'notSub';
  }
}
