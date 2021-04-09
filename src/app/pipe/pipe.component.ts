import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  toDate: any;
  fahrenheit: number;
  celsius: number;
  constructor(
    private _date: DatePipe,
  ) { } 

  ngOnInit() {
    this.toDate = this._date.transform("2020-05-01", 'EEEE MMMM dd y hh:mm a');
  }

}