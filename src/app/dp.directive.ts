import { Directive, Input, Output, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[dynamicColor]'
})
export class DpDirective implements OnInit{ 
   @Input('dynamicColor') dynamicColor: string;  
   @Input() defaultValue: string;  
   constructor(private elRef: ElementRef) {  
   }  
  ngOnInit(): void {
  throw new Error('Method not implemented.');
  }
   @HostListener('mouseover') onMouseOver() {  
     this.changeBackgroundColor(this.dynamicColor || this.defaultValue);  
   }  
   @HostListener('mouseleave') onMouseLeave() {  
     this.changeBackgroundColor('white');  
   }  
   private changeBackgroundColor(color: string) {  
     this.elRef.nativeElement.style.backgroundColor = color;  
   }  

}