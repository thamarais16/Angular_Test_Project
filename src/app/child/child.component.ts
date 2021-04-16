import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
// import { Customer } from '../child/child.component';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  //changeDetection: ChangeDetectionStrategy.Default,
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() message: string;
  @Input() customer: Customer;
  changeLog: [...string[]] = [];
  constructor() { 
    console.log("child constructor");
  }

  //customer: Customer = new Customer();


  ngOnInit() {
    console.log("child init");
  }

  ngOnDestroy(){
    console.log("child destroy");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("child ngOnChanges");
    for(let prop in changes){
      const to = JSON.stringify(changes[prop].currentValue);
      const from = JSON.stringify(changes[prop].previousValue);
      const CHANGElOG = `${prop}: changed from ${from} to ${to}`;
      this.changeLog.push(CHANGElOG);

    }
  }

  // ngDoCheck(){
  //   console.log("child ngDoCheck");
  // }

  // ngAfterContentInit(){
  //   console.log("child ngAfterContentInit");
  // }

  // ngAfterContentChecked(){
  //   console.log("child ngAfterContentChecked");
  // }

  // ngAfterViewInit(){
  //   console.log("child ngAfterViewInit");
  // }

  // ngAfterViewChecked(){ 
  //   console.log("child ngAfterViewChecked");
  // }



}


export class Customer{
  name: string;
  code: number;
}