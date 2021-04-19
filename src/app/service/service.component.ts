import { Component, OnInit } from '@angular/core';
import { Product } from "../product";
import { ProductService } from "../product-service";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html', 
  styleUrls: ['./service.component.css'] 
})
export class ServiceComponent implements OnInit { 
  products: Product[];

  constructor() { }

  ngOnInit() {
    this.products = new ProductService().getProducts();
    console.log(this.products);
  }

}