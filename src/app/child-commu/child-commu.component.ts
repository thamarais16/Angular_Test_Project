import { Component, OnInit, Input, Output, DoCheck, KeyValueDiffers, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-child-commu',
  templateUrl: './child-commu.component.html',
  styleUrls: ['./child-commu.component.css']
})
export class ChildCommuComponent implements OnInit, DoCheck, OnChanges { 
  @Input() message: string;
  @Input() customer = {} as Customer; 
  changeLog: [...string[]] =[];

  constructor() { }

  ngOnInit() { 
  }

  ngDoCheck(){
  }

  ngOnChanges(changes: SimpleChanges){
    for(let key in changes){
      const change = key;
      const from = JSON.stringify(changes[key].previousValue);
      const to = JSON.stringify(changes[key].currentValue);
      const changeLog = `${change} is changed from ${from} to ${to}`;
      this.changeLog.push(changeLog);

    }
  }


}