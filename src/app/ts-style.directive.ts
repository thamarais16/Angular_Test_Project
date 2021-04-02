import { Directive, ElementRef, Input, OnInit, Output, HostListener } from '@angular/core';

@Directive({
  selector: '[tsStyle]'
})
export class TsStyleDirective{
 _tsStyle: Object;
  constructor(
   private el: ElementRef
  ) { }

  @Input()
  set tsStyle(val: any){
    this._tsStyle = val;
    this.updateStyle()
  }

  updateStyle(){
    if(this._tsStyle instanceof Object){
      for(let keys in this._tsStyle){
        let key = keys;
        this.el.nativeElement.style[key] = (this._tsStyle[key] || 'black');
      }
    }
  }


}