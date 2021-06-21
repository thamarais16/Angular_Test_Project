import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '[app-cld]',
  templateUrl: './cld.component.html',
  styleUrls: ['./cld.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CldComponent implements OnInit {
  @Input() received = "";

  constructor() { 
    console.log("child constructor");
  }

  ngOnChanges(){
    console.log("child ngOnchanges");
  }

  ngOnInit() {
    console.log("child ngOnInit");
  }

  ngDoCheck(){
    console.log("child ngDoCheck");
  }

  ngAfterContentInit(){
    console.log("child ngAfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("child ngAfterContentchecked");
  }

  ngAfterViewInit(){
    console.log("child ngAfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("child ngAfterViewchecked");
  }

  ngOnDestroy(){
    console.log("child ngOnDestroy");
  }

} 