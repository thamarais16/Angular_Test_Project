import { Component, OnInit, Input, Output, DoCheck, KeyValueDiffers, OnChanges } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-child-commu',
  templateUrl: './child-commu.component.html',
  styleUrls: ['./child-commu.component.css']
})
export class ChildCommuComponent implements OnInit, DoCheck { 
  @Input() message: string;
  @Input() customer = {} as Customer; 

  constructor() { }

  ngOnInit() { 
  }

  ngDoCheck(){
  }

}