import { Component, OnInit, Optional, Self, InjectionToken, Inject} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from "@angular/forms";
import { UserDetailService } from "../user-detail.service";
import { Userdetail } from '../userdetail';
export const userDetail = new InjectionToken<string>('');

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'], 
  providers: [
    {
      provide: UserDetailService,
      useClass: UserDetailService
    },
    {
      provide: userDetail,
      useValue: {
        name: "Robert",
        password: "Robert@123",
        accept: true
      }
    },
    {
      provide: 'useMock',
      useValue: true
    },
  ]
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup;
  userDetails: Userdetail;

  constructor(
    private formBuild: FormBuilder,
    @Optional() @Self() private userDetail: UserDetailService,
    @Optional() @Self() @Inject(userDetail) private userDetailMock,
    @Inject('useMock') private useMock
  ) { 
    this.userDetails = this.useMock ? this.userDetailMock : this.userDetail?.getDetail();
    console.log(this.userDetails)
  }

  ngOnInit() {
    this.initializeForm(); 
  }

  initializeForm(){
    this.form = this.formBuild.group({
      name: new FormControl(null,[Validators.required, this.nameMinimumLength]),
      password: new FormControl(null,[Validators.required],[]),
      accept: new FormControl(null,[Validators.required],[])
    })

    this.form.patchValue(this.userDetails);
  }

  nameMinimumLength(control: AbstractControl) {
    let value = control as unknown as string;
    if(value.trim().length <3){
      return { isNotMatch: true }
    }else{
      return null
    }
  }

  onSubmit(){
    console.log(this.form.getRawValue());
  }

}
