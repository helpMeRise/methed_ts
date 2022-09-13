export class Product {
  productName: string
  price: number

  constructor(productName: string, price: number) {
    this.productName = productName;
    this.price = price;
  }

  set productNameChange(newName: string) {
    this.productName = newName;
  }

  set priceChange(newPrice: number) {
    this.price = newPrice;
  }

  get productNameInfo(): string {
    return this.productName;
  }

  get priceInfo(): number {
    return this.price;
  }
};
