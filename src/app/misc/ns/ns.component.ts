import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TeamService } from '../../shared/services/teams.service';

@Component({
  selector: 'app-ns',
  templateUrl: './ns.component.html',
  styleUrls: ['./ns.component.scss'],
})
export class NsComponent implements OnInit {
  type: 'sub' | 'notSub';
  form;
  customerName: string = '';
  ticket: string = '';
  reason: string = '';
  startingNight: string = '';
  storeClose: string= '';
  storeEod: string = '';
  notes: string = '';
  emailContent;
  emailContentEncoded;

  constructor(private team: TeamService) {}
  
teamArry;
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
    this.emailContent = 
    `Store: ${form.value.custName}

    Task: ${form.value.reason}

    When: ${form.value.stNight}

    Store Closes At: ${form.value.sClose}

    EOD Runs At: ${form.value.sEod}

    Notes: ${form.value.notes}

    ${this.teamArry.team} - ${this.teamArry.name} - ${this.teamArry.phone}
        `;

    this.emailContentEncoded = encodeURIComponent(this.emailContent);
  }
  goBack() {
    this.type = 'notSub';
  }
  }
