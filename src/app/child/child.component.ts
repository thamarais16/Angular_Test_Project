import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Customer } from "./customer";


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  //changeDetection: ChangeDetectionStrategy.Default,
})
export class ChildComponent implements OnInit, OnChanges {
  
  @Input() message: string;
  @Input() customer: Customer = new Customer();
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
    console.log(changes);
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
