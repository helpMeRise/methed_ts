"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
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
exports.Product = Product;
;
