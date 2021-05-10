import { Component, OnInit, Optional, Self } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { UserDetailService } from "../user-detail.service";
import { Userdetail } from '../userdetail';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
  providers: [
    {
      provide: UserDetailService,
      useClass: UserDetailService
    }
  ]
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup;
  userDetails: Userdetail;

  constructor(
    private formBuild: FormBuilder,
    @Optional() @Self() private userDetail: UserDetailService
  ) { 
    this.userDetails = userDetail?.getDetail();
    console.log(this.userDetails)
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(){
    this.form = this.formBuild.group({
      name: new FormControl('',[Validators.required, Validators.min(3)],[]),
      password: new FormControl('',[Validators.required, Validators.min(3)],[]),
      accept: new FormControl('',[Validators.required],[])
    })

    this.form.patchValue(this.userDetails);
  }

  onSubmit(){
    console.log(this.form.getRawValue());
  }

}