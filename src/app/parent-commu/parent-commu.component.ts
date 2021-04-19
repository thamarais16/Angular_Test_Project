import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-parent-commu',
  templateUrl: './parent-commu.component.html',
  styleUrls: ['./parent-commu.component.css']
})
export class ParentCommuComponent implements OnInit {
  message: string;
  code: number = 0;
  name: string = "";
  customer: Customer = new Customer();
  
  constructor() { }

  ngOnInit() {
  }

  updateChild(){
    this.customer.name = this.name;
    this.customer.code = this.code;
  }
 
}