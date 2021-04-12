import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: '[app-child]',
  templateUrl: './child.component.html', 
  styleUrls: ['./child.component.css'],
  //inputs: ['count']
})
export class ChildComponent implements OnChanges {
  @Input() childText: any;
  @Output() emitedChildValue: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes);
    for(let key in changes){
      if(key == "childText"){
        alert("boboy0");
        this.emitedChildValue.emit(changes['childText'].currentValue);
      }
    }
  }


}