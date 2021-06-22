import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-prt',
  templateUrl: './prt.component.html',
  styleUrls: ['./prt.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PrtComponent implements OnInit, OnChanges {
  hideChild: boolean = false;
  message: string = "";
  customer: Customer<string, number> = new Customer<string, number>();

  constructor() { 
    console.log("parent constructor");
  }

  ngOnChanges(){
    console.log("parent ngOnchanges");
  }

  ngOnInit() {
    console.log("parent ngOnInit");
  }

  ngDoCheck(){
    console.log("parent ngDoCheck");
  }

  ngAfterContentInit(){
    console.log("parent ngAfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("parent ngAfterContentchecked");
  }

  ngAfterViewInit(){
    console.log("parent ngAfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("parent ngAfterViewchecked");
  }

  ngOnDestroy(){
    console.log("parent ngOnDestroy");
  }
  
  updateCustomer(): void{
    console.log("none");
  }
}


export class Customer<T, U>{
  public name: T;
  public code: U;
}