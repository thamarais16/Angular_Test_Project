import { Injectable, Inject } from "@angular/core";
import { loggerService } from "./log";
import { Product } from './product'

@Injectable()
export class ProductService {
  constructor(
   @Inject(loggerService) private logger,
  ){

  }
  public getProducts(){ 
    let products: Product[];

    products = [
      new Product(1, 'memory', 800),
      new Product(2, 'pendric', 1000),
      new Product(3, 'power', 343)
    ]

    this.logger.log('oh ', products);

    return products;
  }
}