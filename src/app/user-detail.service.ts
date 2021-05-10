import { Injectable } from '@angular/core';
import { Userdetail } from './userdetail';

@Injectable({
  providedIn: "root"
})
export class UserDetailService {

  constructor() { }

  getDetail(){
    let detail: Userdetail;

    detail = new Userdetail('Thamarai Selvan', 'Stack@123', true);

    return detail;
  }

}