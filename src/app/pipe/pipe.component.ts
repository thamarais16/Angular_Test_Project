import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { DatePipe, CurrencyPipe, formatCurrency, getCurrencySymbol, getLocaleDateFormat, KeyValue } from '@angular/common';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

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
  breeds=
    {
      "corgi": ["cardigan"],
      "deerhound": ["scottish"],
      "bulldog": ["boston", "english", "french"],
      "mastiff": ["bull", "english", "tibetan"],
      "australian": ["shepherd"],
      "greyhound": ["italian"],
      "buhund": ["norwegian"],
      "hound": ["afghan", "basset", "blood", "english", "ibizan", "plott", "walker"],
      "bullterrier": ["staffordshire"],
    }

    maps = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3]
    ])
    


  constructor(
    private _date: DatePipe,
    private _currency: CurrencyPipe,
    @Inject(LOCALE_ID) private locale: string
  ) { } 

  ngOnInit() {
    this.toDate = this._date.transform(new Date(8675463526456), 'EE, MMM, d, y, H:m');
    this.currency = formatCurrency(500, this.locale, getCurrencySymbol('INR', 'narrow'));
   // this.toDate = formatDate(new Date(), this.locale, getLocaleDateFormat('EEE','date');
  }

  orderOriginal = (a: KeyValue<string,string[]>, b: KeyValue<string,string[]>): number => {
    //return 0;
    //return a.value.length > b.value.length ? -1 : (a.value.length > b.value.length) ? 0: 1;
    return a.value.length > b.value.length ? 1 : (a.value.length > b.value.length) ? 0: -1;
  }

  obsValue: Observable<any> = new Observable(obs => {
    console.log("Observable");
    setTimeout(()=>{
      obs.next("Hi I am Observable with async pipe");
    },10000);
  }).pipe(shareReplay());

  obsValue2: Observable<any> = new Observable(obs => {
    console.log("Observable");
    setTimeout(()=>{
      obs.next({"message":["afghan","basset","blood","english","ibizan","plott","walker"],"status":"success"});
    },10000);
  }).pipe(shareReplay());

}