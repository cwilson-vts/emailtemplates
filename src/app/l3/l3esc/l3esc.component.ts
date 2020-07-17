import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-l3esc',
  templateUrl: './l3esc.component.html',
  styleUrls: ['./l3esc.component.scss']
})
export class L3escComponent implements OnInit{
type: 'sub' | 'notSub';
emailString = '';
  constructor() { }
  
  ngOnInit() {
    this.type = 'notSub';
  }

  get isSub(){
    return this.type === 'sub'
  }

  onSubmit(form: NgForm){
    console.log(form);
    this.type = 'sub';
    this.emailString = 'mailto:ncr_l3_escalations@truno.com?cc=bramos@truno.com;jcabello@truno.com&subject=L3%20Escalations%20-%20';
  }


}
