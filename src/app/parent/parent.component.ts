import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-parent', 
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ParentComponent implements OnInit {
  displayChild: boolean = true;
  parentMessage: string = "";
  contentProjection: string = "Hi child . I am parent content projection.";
  constructor() { 
    console.log("parent constructor");
  }

  ngOnInit() {
    console.log("parent init");
  }

  ngOnDestroy(){
    console.log("parent destroy");
  }
   
  ngOnChanges(){
    console.log("parent ngOnChanges");
  }

  ngDoCheck(){
    console.log("parent ngDoCheck");
  }

  ngAfterContentInit(){
    console.log("parent ngAfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("parent ngAfterContentChecked");
  }

  ngAfterViewInit(){
    console.log("parent ngAfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("parent ngAfterViewChecked");
  }

  toggle(): void{
    this.displayChild = !this.displayChild;
  }

}