 import { Component, OnInit } from '@angular/core';
 import{ DatePipe } from "@angular/common";

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  title= "Angular Basics";
  myImage: string = "https://homepages.cae.wisc.edu/~ece533/images/fruits.png";
  myColor: string ="orange";
  elements: string = "<p>Hi <b>Thamrai Selvan</b></p>"
  stings: string = "Concate";
  isDisabled: boolean = false;
  closeLabel: string = "close";
  name: string ="";
  names: string ="";
  valss: string = "";
  thamas: boolean = true;
  thiru: boolean = false;
  constructor(
   private _date: DatePipe,
  ) { }

  ngOnInit() {
  }  

  returnValidDate(val: number): any{
    return this._date.transform(val, "EEE, MMM, d,");
  }

  a(): any{
    return 9;
  }

  dis(event: any): string{
    return this.names = event;
  }

  vals(val?: any){
    document.getElementById("pTag").style.color = "red";
  }

  display(){
    alert(this.name);
  }


}