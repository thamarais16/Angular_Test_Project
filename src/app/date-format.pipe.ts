import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe, SlicePipe } from  "@angular/common"

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform { 
  constructor(
    private dates: DatePipe,
    private slice: SlicePipe
  ){

  }
  transform(value: any, args1: any, args2: any): any {
    if(args1 = "dates"){
      return this.dates.transform(value, args2);
    }
    if(args1 = 'slice'){
      return this.slice.transform(value, args2);
    }
    
  }

}