import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html', 
  styleUrls: ['./child.component.css'],
  //inputs: ['count']
})
export class ChildComponent  {
  
  public _count: number = 0;

  constructor() { }

  increment(){
    this._count++;
  }

  decrement(){
    this._count--;
  }

}