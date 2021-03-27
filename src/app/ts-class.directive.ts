import { Directive, ElementRef, Input, Output, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[tsClass]',
})
export class TsClassDirective implements OnInit{
 @Input() tsClass: (string | Array<string> | Object);
  
  constructor(
    private el: ElementRef
  ){

  }

  ngOnInit(): void{
    if(this.tsClass instanceof Array){
      this.tsClass.forEach(element => {
        this.el.nativeElement.classList.add(element);
      })  
    }

    if(typeof(this.tsClass) == 'string'){
      let splitString = this.tsClass.split(' ');
      splitString.forEach(element => {
        this.el.nativeElement.classList.add(element);
      }) 
    }

    if(this.tsClass instanceof Object){
      for(let key in this.tsClass){
        if(this.tsClass[key] == true){
          this.el.nativeElement.classList.add(key);
        }
      }
    }
   
  }
}
