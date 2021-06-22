import { Component, OnInit, Input, ChangeDetectionStrategy, SimpleChanges, SimpleChange } from '@angular/core';
import { Customer } from '../prt/prt.component';

@Component({
  selector: '[app-cld]',
  templateUrl: './cld.component.html',
  styleUrls: ['./cld.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CldComponent implements OnInit {
  @Input() received = "";
  @Input() customer: Customer<string, number> = new Customer<string, number>();
  changedValue = "";

  constructor() { 
    console.log("child constructor");
  }

  ngOnChanges(changes: SimpleChanges){
    for(let key in changes){
      let change = changes[key];
      let previousValue =  JSON.stringify(change.previousValue);
      let currentValue =  JSON.stringify(change.currentValue);
      this.changedValue = JSON.stringify(`${previousValue} changed to ${currentValue}`);
    }
  }

  ngOnInit() {
    console.log("child ngOnInit");
  }

  ngDoCheck(){
    console.log("child ngDoCheck");
  }

  ngAfterContentInit(){
    console.log("child ngAfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("child ngAfterContentchecked");
  }

  ngAfterViewInit(){
    console.log("child ngAfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("child ngAfterViewchecked");
  }

  ngOnDestroy(){
    console.log("child ngOnDestroy");
  }

} 