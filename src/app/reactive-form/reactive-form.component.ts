import { Component, OnInit, Optional, Self, InjectionToken, Inject} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
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
      name: new FormControl('',[Validators.required, this.nameMinimumLength.bind(this)],[]),
      password: new FormControl('',[Validators.required],[]),
      accept: new FormControl('',[Validators.required],[])
    })

    this.form.patchValue(this.userDetails);
  }

  nameMinimumLength(value: string){
    if(value.trim().length <3){
      return {lengthMatch: true}
    }else{
      return null
    }
  }

  onSubmit(){
    console.log(this.form.getRawValue());
  }

}
