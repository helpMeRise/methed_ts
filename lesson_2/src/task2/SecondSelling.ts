import { AbstractSelling } from "./AbstractSelling";
import { Product } from "./Product";

export class SecondSelling extends AbstractSelling {
  countForDiscount: number
  constructor(product: Product, count: number, countForDiscount: number) {
    super(product, count);
    this.countForDiscount = countForDiscount;
  }

  override getPrice(): number {
    const price = this.count >= this.countForDiscount 
      ? +((this.productInfo.price * this.count * 0.9).toFixed(2))
      : +(this.productInfo.price * this.count)
    return price;
  }
};
