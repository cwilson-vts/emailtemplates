import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-l3esc',
  templateUrl: './l3esc.component.html',
  styleUrls: ['./l3esc.component.scss']
})
export class L3escComponent implements OnInit{

  constructor() { }
  
  ngOnInit() {
  }
  onSubmit(form: NgForm){
    console.log(form);
  }

}
