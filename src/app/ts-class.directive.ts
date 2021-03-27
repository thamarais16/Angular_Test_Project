import { Directive, ElementRef, Input, Output, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[tsClass]',
})
export class TsClassDirective {
 _tsClass: any; 
  
  constructor(
    private el: ElementRef
  ){

  }

  @Input()
  set tsClass(val: (string | Array<string> | Object)) {
    this._tsClass = val;
    this.updateClass();
  }

  updateClass(){
    if(this._tsClass instanceof Array){
      this._tsClass.forEach(element => {
        this.el.nativeElement.classList.add(element);
      })  
    }

    if(typeof(this._tsClass) == 'string'){
      let splitString = this._tsClass.split(' ');
      splitString.forEach(element => {
        this.el.nativeElement.classList.add(element);
      }) 
    }

    if(this._tsClass instanceof Object){
      for(let key in this._tsClass){
        if(this._tsClass[key] == true){
          this.el.nativeElement.classList.add(key);
        }
      }
    }
  }
}
