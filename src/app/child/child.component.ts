import { ChangeDetectionStrategy, Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, Output, EventEmitter, ElementRef} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html', 
  styleUrls: ['./child.component.css'],
  //inputs: ['count']
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChildComponent {
  
  @Input() message: string;
  customer: Customer = new Customer();

  constructor( 
    private elem: ElementRef
  ){
    console.log("child constructor");   
  }

  ngOnInit(){
    console.log("child ngOnInit");   
  }

  ngOnChanges(){
    console.log("child ngOnChanges");   
  }


  ngDoCheck(){
    console.log("child ngDoCheck");    
  }

  ngAfterContentInit(){
    console.log("child ngAfterContentInit");    
  }

  ngAfterContentChecked(){
    console.log("child ngAfterContentChecked");   
  }

  ngAfterViewInit(){
    console.log("child ngAfterViewInit");   
  }

  ngAfterViewChecked(){
    console.log("child ngAfterViewChecked");   
  }

  ngOnDestroy(){
    console.log("child ngOnDestroy");   
  }

}


export class Customer{
  code: number;
  name: string;
}