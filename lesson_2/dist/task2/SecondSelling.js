"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecondSelling = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
class SecondSelling extends AbstractSelling_1.AbstractSelling {
    countForDiscount;
    constructor(product, count, countForDiscount) {
        super(product, count);
        this.countForDiscount = countForDiscount;
    }
    getPrice() {
        const price = this.count >= this.countForDiscount
            ? +((this.productInfo.price * this.count * 0.9).toFixed(2))
            : +(this.productInfo.price * this.count);
        return price;
    }
}
exports.SecondSelling = SecondSelling;
;
