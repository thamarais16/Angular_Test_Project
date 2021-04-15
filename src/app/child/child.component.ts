import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ChildComponent implements OnInit {
  _message;
  constructor() { 
    console.log("child constructor");
  }

  customer: Customer = new Customer();

  @Input()
  set message(value: string){
    this._message = value;
  }
  ngOnInit() {
    console.log("child init");
  }

  ngOnDestroy(){
    console.log("child destroy");
  }

  ngOnChanges(){
    console.log("child ngOnChanges");
  }

  ngDoCheck(){
    console.log("child ngDoCheck");
  }

  ngAfterContentInit(){
    console.log("child ngAfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("child ngAfterContentChecked");
  }

  ngAfterViewInit(){
    console.log("child ngAfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("child ngAfterViewChecked");
  }

}


export class Customer{
  name: string;
  code: number;
}