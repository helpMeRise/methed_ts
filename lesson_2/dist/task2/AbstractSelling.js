"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSelling = void 0;
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
    compare(a, b) {
        if (a.getPrice() > b.getPrice())
            return 1;
        if (a.getPrice() < b.getPrice())
            return -1;
        return 0;
    }
}
exports.AbstractSelling = AbstractSelling;
;
