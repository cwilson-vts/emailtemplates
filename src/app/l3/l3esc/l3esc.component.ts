import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { TeamService } from 'src/app/shared/services/teams.service';

@Component({
  selector: 'app-l3esc',
  templateUrl: './l3esc.component.html',
  styleUrls: ['./l3esc.component.scss']
})
export class L3escComponent implements OnInit{
type: 'sub' | 'notSub';
emailString = '';
  constructor(private team: TeamService) { }
  managers;
  leadership;
  escalation;

  customerName: string = '';
  storeContact: string = '';
  softwareVersion: string = '';
  boType: string = '';
  hdwrType: string = '';
  issue: string = '';
  notes: string = '';
  ticket: string = '';
  managerApproval: string = '';
  ncrNumber: string = '';
  ncrTech: string = '';

  emailContent;
  emailContentEncoded;

  ngOnInit() {
    this.type = 'notSub';
    this.managers = this.team.getAllMgr();
    this.leadership = this.team.getLeadership();
    this.escalation = this.team.getEscalationTeam();
  }

  get isSub(){
    return this.type === 'sub'
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

        `;

    this.emailContentEncoded = encodeURIComponent(this.emailContent);
  }

  goBack() {
  this.type = 'notSub';
}

}
