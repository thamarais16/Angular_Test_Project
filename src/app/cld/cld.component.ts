import { ifStmt } from '@angular/compiler/src/output/output_ast';
import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  SimpleChanges,
  SimpleChange,
  KeyValueDiffers
} from '@angular/core';
import { Customer } from '../prt/prt.component';

@Component({
  selector: '[app-cld]',
  templateUrl: './cld.component.html',
  styleUrls: ['./cld.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CldComponent implements OnInit {
  @Input() received = '';
  @Input() customer: Customer<string, number> = new Customer<string, number>();
  changedValue = [];
  diffy: any;
  county= 0;

  constructor(
    private differ: KeyValueDiffers
  ) {
    console.log('child constructor');
    this.diffy = this.differ.find(this.customer).create();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    //for (let key in changes) {
      //let change = changes[key];
      //console.log(change);
      // let previousValue =  JSON.stringify(change.previousValue);
      //let currentValue =  JSON.stringify(change.currentValue);
      //this.changedValue = JSON.stringify(`${previousValue} changed to ${currentValue}`);
    //}
  }

  ngOnInit() {
    //console.log("child ngOnInit");
  }

  ngDoCheck() {
    //console.log("child ngDoCheck");
    const custom = this.diffy.diff(this.customer);
    if(custom){
      custom.forEachChangedItem(item =>{
        this.changedValue.push(item.key+' is changed from '+ JSON.stringify(item.previousValue) +' to '+JSON.stringify(item.currentValue));
      });

    }else{
      this.changedValue.push("no content");
    }
  }

  ngAfterContentInit() {
    // console.log("child ngAfterContentInit");
  }

  ngAfterContentChecked() {
    //console.log("child ngAfterContentchecked");
  }

  ngAfterViewInit() {
    //console.log("child ngAfterViewInit");
  }

  ngAfterViewChecked() {
    //console.log("child ngAfterViewchecked");
  }

  ngOnDestroy() {
    //console.log("child ngOnDestroy");
  }
}
