
class Product {
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
}

abstract class AbstractSelling {
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

}

class FirstSelling extends AbstractSelling {
  constructor(product: Product, count: number) {
    super(product, count);
  }

  override getPrice(): number {
    const price = +((this.productInfo.price - 10) * this.count).toFixed(2);
    return price;
  }
}

class SecondSelling extends AbstractSelling {
  countForDiscount: number = 3
  constructor(product: Product, count: number) {
    super(product, count);
  }

  override getPrice(): number {
    const price = this.count >= this.countForDiscount 
      ? +((this.productInfo.price * this.count * 0.9).toFixed(2))
      : +(this.productInfo.price * this.count)
    return price;
  }
}

const cup = new Product('Cup', 500);
const monitor = new Product('Monitor', 10_000);
const chair = new Product('Chair', 15_000);
const table = new Product('Table', 25_000);
const car = new Product('Car', 6_000_000);
const house = new Product('House', 25_000_000);
const keyboard = new Product('Keyboard', 10_000);
const icecream = new Product('icecream', 200);

const firstSell = new FirstSelling(cup, 10);
const secondSell = new SecondSelling(house, 4)

console.log(firstSell.getPrice());
console.log(secondSell.getPrice());