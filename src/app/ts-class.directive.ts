import { Directive, ElementRef, Input, Output, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[tsClass]'
})
export class TsClassDirective implements OnInit{
  @Input() tsClass: string;
  constructor(
   private elRef: ElementRef,
  ) { }
  ngOnInit(): void {
    this.elRef.nativeElement.style.color = "red";
  }

}