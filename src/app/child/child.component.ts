import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChange, SimpleChanges, DoCheck } from '@angular/core';
import { Customer } from "../customer";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  //changeDetection: ChangeDetectionStrategy.Default,
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {
  
  @Input() message: string;
  @Input() customer = {} as Customer;
  changeLog: [...string[]] = [];
  oldCustomer = {} as Customer;
  constructor() { 
    console.log("child constructor");
  }

  //customer: Customer = new Customer();


  ngOnInit() {
    //console.log("child init");
  }

  ngOnDestroy(){
    //console.log("child destroy");
  }

  ngDoCheck(){
    if(this.oldCustomer.name != this.customer.name || this.oldCustomer.code != this.customer.code){
      const to = JSON.stringify(this.customer);
      const from = JSON.stringify(this.oldCustomer);
      const changes = `do check customer from ${from} to ${to}`;
      this.changeLog.push(changes);
      this.oldCustomer = {...this.customer};
    }
    
  }
  

  ngOnChanges(changes: SimpleChanges){
    for(let key in changes){
      const changee = key;
      const from = JSON.stringify(changes[key].previousValue);
      const to = JSON.stringify(changes[key].currentValue);
      const changeLog = `${changee} is changed from ${from} to ${to}`;
      this.changeLog.push(changeLog);
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
