import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConverter'
})
export class TempConverterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value && !isNaN(value)){
      if(args === 'C'){
        var temperature = (value - 32)/1.8;
        return temperature.toFixed(2);
      }else if(args === 'F'){
        var temperature = value * 1.8 + 32;
        return temperature.toFixed(2);
      }
      return;
    }
  }

}