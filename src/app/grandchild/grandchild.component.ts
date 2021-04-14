 import { Component, OnInit, Input } from '@angular/core';
import{ Customer } from '../child/child.component';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent implements OnInit {
  @Input() customer: Customer;
  constructor() { }

  ngOnInit() {
  }

}