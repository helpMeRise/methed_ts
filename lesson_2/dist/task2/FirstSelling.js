"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstSelling = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
class FirstSelling extends AbstractSelling_1.AbstractSelling {
    constructor(product, count) {
        super(product, count);
    }
    getPrice() {
        const price = +((this.productInfo.price - 10) * this.count).toFixed(2);
        return price;
    }
}
exports.FirstSelling = FirstSelling;
;
