import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  counter: number = 5;

  constructor() { }

  ngOnInit() {
  } 

  increment(): number{
    return this.counter++;
  }

  decrement(): number{
    return this.counter--;
  }

}