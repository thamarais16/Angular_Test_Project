import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges} from '@angular/core';
import { Logger } './log.ts'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  //inputs: ['count']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input('MyCount') count: number;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    for(let property in changes){
      if(property === 'count'){
        console.log
      }
    }
  }

  ngOnInit() {
  }

}