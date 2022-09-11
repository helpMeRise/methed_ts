"use strict";
class Product {
    productName;
    price;
    constructor(productName, price) {
        this.productName = productName;
        this.price = price;
    }
    set productNameChange(newName) {
        this.productName = newName;
    }
    set priceChange(newPrice) {
        this.price = newPrice;
    }
    get productNameInfo() {
        return this.productName;
    }
    get priceInfo() {
        return this.price;
    }
}
class AbstractSelling {
    Product;
    count;
    constructor(Product, count) {
        this.Product = Product;
        this.count = count;
    }
    ;
    set productChange(product) {
        this.Product = product;
    }
    set countChange(newCount) {
        this.count = newCount;
    }
    get productInfo() {
        return this.Product;
    }
    get countInfo() {
        return this.count;
    }
}
class FirstSelling extends AbstractSelling {
    constructor(product, count) {
        super(product, count);
    }
    getPrice() {
        const price = +((this.productInfo.price - 10) * this.count).toFixed(2);
        return price;
    }
}
class SecondSelling extends AbstractSelling {
    countForDiscount = 3;
    constructor(product, count) {
        super(product, count);
    }
    getPrice() {
        const price = this.count >= this.countForDiscount
            ? +((this.productInfo.price * this.count * 0.9).toFixed(2))
            : +(this.productInfo.price * this.count);
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
const secondSell = new SecondSelling(house, 4);
console.log(firstSell.getPrice());
console.log(secondSell.getPrice());
