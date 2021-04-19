import { Product } from './product'

export class ProductService {
  public getProducts(){
    let products: Product[];

    products = [
      new Product(1, 'memory', 800),
      new Product(2, 'pendric', 1000),
      new Product(3, 'power', 343)
    ]

    return products;
  }
}