import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  counter: number = 0;
  name: any = "Thams";
  constructor() { }

  ngOnInit() {
  } 

  changeName(val: any): void{
    this.name = val;
  }

}