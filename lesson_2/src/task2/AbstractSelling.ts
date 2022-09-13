import { Product } from './Product';
export abstract class AbstractSelling {
  Product: Product
  count: number

  constructor(Product: Product, count: number) {
    this.Product = Product;
    this.count = count;
  };

  set productChange(product: Product) {
    this.Product = product;
  }

  set countChange(newCount: number) {
    this.count = newCount;
  }

  get productInfo(): Product {
    return this.Product;
  }

  get countInfo(): number {
    return this.count;
  }

  abstract getPrice(): number;

  compare(a: AbstractSelling, b: AbstractSelling): number {
    if (a.getPrice() > b.getPrice()) return 1;
    if (a.getPrice() < b.getPrice()) return -1;
    return 0;
  }
};
