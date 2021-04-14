import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import{ Customer } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ParentComponent {
  message: string = "hello";
  content: string = "hello";
  hideChild: boolean = false;

  constructor(
    private cus: Customer
  ){
    console.log("Parent constructor");   
  }

  ngOnInit(){
    console.log("Parent ngOnInit");   
  }

  ngOnChanges(){
    console.log("Parent ngOnChanges");   
  }

  ngDoCheck(){
    console.log("Parent docheck");   
  }

  ngAfterContentInit(){
    console.log("Parent ngAfterContentInit");   
  }

  ngAfterContentChecked(){
    console.log("Parent ngAfterContentChecked");   
  }

  ngAfterViewInit(){
    console.log("Parent ngAfterViewInit");   
  }

  ngAfterViewChecked(){
    console.log("Parent ngAfterViewChecked");   
  }

  ngOnDestroy(){
    console.log("Parent ngOnDestroy");   
  }

}