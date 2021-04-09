import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  //inputs: ['count']
})
export class ChildComponent implements OnInit {
  @Input('MyCount') count: number;
  constructor() { }

  ngOnInit() {
  }

}