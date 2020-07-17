import { Component,} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { L3form } from "../l3form";

@Component({
  selector: 'app-l3esc',
  templateUrl: './l3esc.component.html',
  styleUrls: ['./l3esc.component.scss']
})
export class L3escComponent {
  l3form: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit(){
    this.l3form = this.fb.group({
      custName: ['', [Validators.minLength(5), Validators.required]],
      storecontact: ['', [Validators.minLength(2), Validators.required]],
      sft: ['', [Validators.minLength(5), Validators.required]],
      botype: ['', [Validators.minLength(5), Validators.required]],
      hdwrtype: ['', [Validators.minLength(5), Validators.required]],
      issue: ['', [Validators.minLength(5), Validators.required]],
      work: ['', [Validators.minLength(5), Validators.required]],
      eaNumber: ['', [Validators.minLength(7),Validators.maxLength(7), Validators.required]],
      mgrApp: ['', [Validators.minLength(5), Validators.required]],
      ncrNum: ['', [Validators.minLength(5), Validators.required]],
      ncrTech:['', [Validators.minLength(5), Validators.required]],
    });
  }
 

}
