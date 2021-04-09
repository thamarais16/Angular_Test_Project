import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { DatePipe, CurrencyPipe, formatCurrency, getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  toDate: any;
  fahrenheit: number;
  celsius: number;
  currency: any;
  constructor(
    private _date: DatePipe,
    private _currency: CurrencyPipe,
    @Inject(LOCALE_ID) private locale: string
  ) { } 

  ngOnInit() {
    this.toDate = this._date.transform(new Date(8675463526456), 'EE, MMM, d, y, H:m');
    this.currency = formatCurrency(500, this.locale, getCurrencySymbol('INR', 'narrow'));
  }

}