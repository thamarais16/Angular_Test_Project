import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html', 
  styleUrls: ['./child.component.css'],
  //inputs: ['count']
})
export class ChildComponent implements OnInit, OnChanges {
  
  public _count: number = 0;
  //@Output() countChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  @Input('MyCount') 
  set count(value: number){ 
    console.log(value);
    this._count = value;
  }

  get count(): number{
    return this._count;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
  }

  increment(){
    this._count++;
    //this.countChange.emit(this._count);
  }

  decrement(){
    this._count--;
    //this.countChange.emit(this._count);
  }

}