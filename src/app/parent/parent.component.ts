import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  counter: number = 0;

  constructor() { }

  ngOnInit() {
  } 

  increment(): number{
    return this.counter++;
  }

  decrement(): number{
    return this.counter--;
  }

  changedCount(val: number){
    this.counter = val;
  }

}