import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { Product } from "../product";
import { ProductService } from "../product-service";
import { loggerService } from "../log";


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html', 
  styleUrls: ['./service.component.css'],
  providers: [ProductService, loggerService ]
})
export class ServiceComponent implements OnInit { 
  products: Product[];

  constructor(
    @Inject(ProductService) private productService,
    @Inject(loggerService) private logger,
  ) { }

  ngOnInit() {
    //this.products = new ProductService().getProducts();
    this.products = this.productService.getProducts();
    this.logger.log(this.products);
  }

}